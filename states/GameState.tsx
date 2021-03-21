import {
  IObservable,
  IObservableArray,
  makeAutoObservable,
  runInAction,
} from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Players } from "../components";
import { CardPack, Deck, Card, Player } from "../types";
import { DeckPrompts, DeckNames, DeckHelp } from "../constants";

class GameStateObject {
  constructor() {
    makeAutoObservable(this);
    this.addCardPack(require("../assets/cardpacks/Standard.json"));
    this.addCardPack(require("../assets/cardpacks/StandardPlus.json"));
    this.addCardPack(require("../assets/cardpacks/420.json"));
    this.addCardPack(require("../assets/cardpacks/Couples.json"));
    this.addCardPack(require("../assets/cardpacks/GirlsNight.json"));
    this.loadPlayers();
  }

  public players: IObservableArray<Player> = [] as IObservableArray<Player>;
  public cardPacks: Array<CardPack> = [] as Array<CardPack>;
  public activePacks: Array<CardPack> = [] as Array<CardPack>;

  public devMode = true;

  public decks: Array<Deck> = [
    {
      name: DeckNames.throwABone,
      prompt: DeckPrompts.throwABone,
      help: DeckHelp.throwABone,
      maxDoghouse: 1,
      useTimer: false,
      cards: [] as Array<Card>,
    },
    {
      name: DeckNames.dogFight,
      prompt: DeckPrompts.dogFight,
      help: DeckHelp.dogFight,
      maxDoghouse: -1,
      useTimer: false,
      cards: [] as Array<Card>,
    },
    {
      name: DeckNames.doghouseOrDare,
      prompt: DeckPrompts.doghouseOrDare,
      help: DeckHelp.doghouseOrDare,
      maxDoghouse: 1,
      useTimer: false,
      cards: [] as Array<Card>,
    },
    {
      name: DeckNames.barkOrBite,
      prompt: DeckPrompts.barkOrBite,
      help: DeckHelp.barkOrBite,
      maxDoghouse: -1,
      useTimer: false,
      cards: [] as Array<Card>,
    },
    {
      name: DeckNames.breeds,
      prompt: DeckPrompts.breeds,
      help: DeckHelp.breeds,
      maxDoghouse: 1,
      useTimer: true,
      cards: [] as Array<Card>,
    },
    {
      name: DeckNames.teachersPet,
      prompt: DeckPrompts.teachersPet,
      help: DeckHelp.teachersPet,
      maxDoghouse: 1,
      useTimer: false,
      cards: [] as Array<Card>,
    },
  ] as Array<Deck>;

  public activeCard: Card = {} as Card;

  public dice = 0;

  drawCard() {
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

  visualRoll() {
    return Math.floor(Math.random() * this.decks.length);
  }

  setDice(i: number) {
    this.dice = i;
    this.drawCard();
  }

  startGame() {
    this.activeCard = {} as Card;
    this.decks.forEach((deck) => (deck.cards = [] as Array<Card>));

    // add all decks in active packs to the current deck.
    for (var i = 0; i < this.activePacks.length; i++) {
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
    player.score += 1;
  }

  resetDoghouse() {
    this.players.forEach((player) => (player.selected = false));
  }

  addPlayer(name: string) {
    name = name.toLowerCase();
    if (
      typeof name != "undefined" &&
      name !== "" &&
      this.players.find((value) => value.name == name) === undefined
    ) {
      var player: Player = { name: name, selected: false, score: 0 };
      this.players.push(player);
      this.savePlayers();
    }
  }

  removePlayer(name: string) {
    // delete keyword does not work as this.players is converted to a
    // MobX Observed Array, so changes won't be found.
    var player = this.players.find((value) => value.name == name);
    if (player!.selected) {
      var newPlayers = this.players.filter((value) => value.name != name);
      this.players.replace(newPlayers);
      this.savePlayers();
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

  async syncPurchasedPacks() {
    const rateJson = await AsyncStorage.getItem("rateComplete");
    let rateComplete: boolean;

    if (rateJson === null) {
      rateComplete = false;
    } else {
      rateComplete = JSON.parse(rateJson);
    }

    const rateIndex = this.cardPacks.findIndex((obj) => obj.ratePack == true);
    runInAction(() => {
      this.cardPacks[rateIndex].purchased = rateComplete;
    });
  }

  async giveRatePack() {
    try {
      const jsonValue = JSON.stringify(true);
      await AsyncStorage.setItem("rateComplete", jsonValue);
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
    this.activePacks.push(
      this.cardPacks.find((cardPack) => cardPack.name == "Standard")
    );
  }

  async savePlayers() {
    try {
      const jsonValue = JSON.stringify(this.players);
      await AsyncStorage.setItem("players", jsonValue);
    } catch (e) {
      console.log(e);
    }
  }

  async loadPlayers() {
    let basePlayers: Player[] = [{ name: "kyle", selected: false, score: 0 }];
    let players: Player[];
    const saved = await AsyncStorage.getItem("players");
    if (saved === null) {
      this.players.replace(basePlayers);
    } else if (saved.length == 2) {
      this.players.replace(basePlayers);
    } else {
      players = JSON.parse(saved);
      this.players.replace(players);
    }
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
    runInAction(() => {
      this.activePacks = newActivePacks;
    });
    this.saveActivePacks();
  }

  async _resetRate() {
    try {
      const jsonValue = JSON.stringify(false);
      await AsyncStorage.setItem("rateComplete", jsonValue);
      this.removeActivePack(
        this.activePacks.find((obj) => {
          return obj.ratePack == true;
        })
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export const GameState = new GameStateObject();
