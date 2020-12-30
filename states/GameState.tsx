import { IObservable, IObservableArray, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Players } from "../components";
import { CardPack, Deck, Card, Player } from "../types";

class GameStateObject {
  constructor() {
    makeAutoObservable(this);
    this.addCardPack(require("../assets/cardpacks/Standard.json"));
    this.addCardPack(require("../assets/cardpacks/StandardPlus.json"));
  }

  public players: IObservableArray<Player> = [
    { name: "colton", selected: false, score: 0 },
    { name: "daniel", selected: false, score: 0 },
    { name: "michael", selected: false, score: 0 },
    { name: "matt", selected: false, score: 0 },
    { name: "carlos", selected: false, score: 0 },
    { name: "juan", selected: false, score: 0 },
  ] as IObservableArray<Player>;

  public cardPacks: Array<CardPack> = [] as Array<CardPack>;

  public activePacks: Array<CardPack> = [] as Array<CardPack>;

  public decks: Array<Deck> = [
    {
      name: "Throw a Bone",
      prompt: "Who's most likely to",
      maxDoghouse: 1,
      cards: [] as Array<Card>
    },
    {
      name: "dog fight",
      prompt: "Debate.",
      maxDoghouse: -1,
      cards: [] as Array<Card>
    },
    {
      name: "doghouse or dare",
      prompt: "Choose someone to",
      maxDoghouse: 1,
      cards: [] as Array<Card>
    },
    {
      name: "BARK OR BITE",
      prompt: "Raise your hand if you've",
      maxDoghouse: -1,
      cards: [] as Array<Card>
    },
    {
      name: "BREEDS",
      prompt: "List",
      maxDoghouse: 1,
      cards: [] as Array<Card>
    },
    {
      name: "Teacher's Pet",
      prompt: "Guess",
      maxDoghouse: 1,
      cards: [] as Array<Card>
    },
  ] as Array<Deck>;

  public activeCard: Card = {} as Card;

  public dice = 0;

  private drawCard() {
    if (this.decks[this.dice].cards.length == 0) {
      this.activeCard = { text: "null" } as Card;
    } else { 
      var index = Math.floor(
        Math.random() * (this.decks[this.dice].cards.length - 1)
      );
      this.activeCard = this.decks[this.dice].cards[index];
      this.decks[this.dice].cards.splice(index, 1);
    }
  }

  addCardPack(pack: CardPack) {
    this.cardPacks.push(pack);
  }

  rollDice() {
    this.dice = Math.floor(Math.random() * this.decks.length);
    this.drawCard();
  }

  startGame() {
    this.activeCard = {} as Card;
    this.decks.forEach((deck) => deck.cards = [] as Array<Card>);

    // add all decks in active packs to the current deck.
    for (var i = 0; i < this.activePacks.length;i ++) {
      this.decks[0].cards = this.activePacks[i].throwABone;
      this.decks[1].cards = this.activePacks[i].dogFight;
      this.decks[2].cards = this.activePacks[i].doghouseOrDare;
      this.decks[3].cards = this.activePacks[i].barkOrBite;
      this.decks[4].cards = this.activePacks[i].breeds;
      this.decks[5].cards = this.activePacks[i].teachersPet;
    }
  }

  adjustScore(name: string) {
    var player = this.players.find((value) => value.name == name);
    player.selected = !player.selected;
    if (player.selected) {
      player.score += 1;
    } else {
      player.score -= 1;
    }
  }

  resetDoghouse() {
    this.players.forEach((player) => (player.selected = false));
  }

  addPlayer(name: string) {
    if (
      typeof name != "undefined" &&
      name !== "" &&
      this.players.find((value) => value.name == name) === undefined
    ) {
      var player: Player = { name: name, selected: false, score: 0 };
      this.players.push(player);
    }
  }

  removePlayer(name: string) {
    // delete keyword does not work as this.players is converted to a
    // MobX Observed Array, so changes won't be found.
    var player = this.players.find((value) => value.name == name);
    if (player!.selected) {
      var newPlayers = this.players.filter((value) => value.name != name);
      this.players.replace(newPlayers);
    } else {
      player!.selected = true;
      setTimeout(() => {
        this.resetPlayer(name);
      }, 2000);
    }
  }

  async resetPlayer(name: string) {
    try {
      var ind = this.players.findIndex((value) => value.name == name);
      this.players[ind].selected = false;
    } catch {}
  }

  async loadActivePacks() {
    try {
      const jsonValue = await AsyncStorage.getItem("activePacks");
      let output: CardPack[];

      if (jsonValue === null) {
        this.loadBasePacks();
      } else if (jsonValue.length == 2) {
        this.loadBasePacks();
      } else {
        output = JSON.parse(jsonValue);
        this.setActivePacks(output);
      }

      this.saveActivePacks();
    } catch (e) {
      console.log(e);
    }
  }

  async saveActivePacks() {
    try {
      const jsonValue = JSON.stringify(this.activePacks);
      await AsyncStorage.setItem("activePacks", jsonValue);
    } catch (e) {
      console.log(e);
    }
  }

  loadBasePacks() {
    this.activePacks.push(this.cardPacks.find((cardPack) => cardPack.name == "Standard"));
  }

  setActivePacks(packs: CardPack[]) {
    this.activePacks = packs;
  }

  addActivePack(pack: CardPack) {
    if (
      this.activePacks.find((value) => value.name == pack.name) === undefined
    ) {
      this.activePacks.push(pack);
      this.saveActivePacks();
    }
  }

  removeActivePack(pack: CardPack) {
    var newActivePacks = this.activePacks.filter(
      (value) => value.name != pack.name
    );
    this.activePacks = newActivePacks;
    this.saveActivePacks();
  }

  sortPacks(sort) {}
}

export const GameState = new GameStateObject();
