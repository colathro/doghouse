import { IObservable, IObservableArray, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Players } from "../components";
import { CardPack } from "../types";
import { Card } from "../types";
import { Player } from "../types";

class GameStateObject {
  constructor() {
    makeAutoObservable(this);
    this.addCardPack(require("../assets/cardpacks/BarkOrBite.json"));
    this.addCardPack(require("../assets/cardpacks/Breeds.json"));
    this.addCardPack(require("../assets/cardpacks/DogFight.json"));
    this.addCardPack(require("../assets/cardpacks/DoghouseOrDare.json"));
    this.addCardPack(require("../assets/cardpacks/TeachersPet.json"));
    this.addCardPack(require("../assets/cardpacks/ThrowABone.json"));
    this.addCardPack(require("../assets/cardpacks/AssCheeks.json"));
  }

  private basePacks: Array<string> = [
    "Bark or Bite",
    "Breeds",
    "Dog Fight",
    "Doghouse or Dare",
    "Teacher's Pet",
    "Throw a Bone",
  ];

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

  public activeCard: Card = {} as Card;

  public dice = 0;

  private drawCard() {
    if (this.activePacks[this.dice].cards.length == 0) {
      this.activeCard = {} as Card;
    } else {
      var index = Math.floor(
        Math.random() * (this.activePacks[this.dice].cards.length - 1)
      );
      this.activeCard = this.activePacks[this.dice].cards[index];
      this.activePacks[this.dice].cards.splice(index, 1);
    }
  }

  addCardPack(pack: CardPack) {
    this.cardPacks.push(pack);
  }

  rollDice() {
    this.dice = Math.floor(Math.random() * this.activePacks.length);
    this.drawCard();
  }

  startGame() {
    this.activeCard = {} as Card;
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
    this.cardPacks.map((val, ind) => {
      if (this.basePacks.includes(val.name)) {
        this.activePacks.push(val);
      }
    });
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
