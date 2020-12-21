import { IObservable, IObservableArray, makeAutoObservable } from "mobx";
import { Players } from "../components";
import { CardPack } from "../types";
import { Card } from "../types";
import { Player } from "../types";

class GameStateObject {
  constructor() {
    Object.freeze(this.gamePhase);
    makeAutoObservable(this);
  }

  public gamePhase = {
    ROLL: 1,
    DRAW: 2,
    PLAY: 3,
    DOGHOUSE: 4,
  };

  public players: IObservableArray<Player> = [
    { name: "colton", selected: false, score: 0 },
    { name: "daniel", selected: false, score: 0 },
    { name: "michael", selected: false, score: 0 },
    { name: "matt", selected: false, score: 0 },
    { name: "carlos", selected: false, score: 0 },
    { name: "juan", selected: false, score: 0 },
  ] as IObservableArray<Player>;

  public doghouseStaging: IObservableArray<string> = [] as IObservableArray<string>;

  public doghouse: IObservableArray<string> = [] as IObservableArray<string>;

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
    this.activePacks = this.cardPacks;
  }

  rollDice() {
    this.dice = Math.floor(Math.random() * this.activePacks.length);
    this.drawCard();
  }

  startGame() {
    this.activeCard = {} as Card;
    this.activePacks = JSON.parse(JSON.stringify(this.cardPacks));
  }

  initializeDoghouseStaging() {
    this.doghouseStaging = [] as IObservableArray<string>;
    this.doghouse = [] as IObservableArray<string>;
    this.players.forEach((player)=>this.doghouseStaging.push(player.name));
  }

  sendPlayerToDoghouse(name: string) {
    if (this.doghouseStaging.find((value) => value == name) !== undefined) {
      var newDoghouseStaging = this.doghouseStaging.filter((value) => value != name);
      this.doghouseStaging.replace(newDoghouseStaging);
      this.doghouse.push(name);
    }
  }

  scoreDoghouse() {
    this.doghouse.forEach((playerName) => this.players.find((player) => player.name == playerName).score +=1 );
  }
  
  removePlayerFromDoghouse(name: string) {
    if (this.doghouse.find((value) => value == name) !== undefined) {
      var newDoghouse = this.doghouse.filter((value) => value != name);
      this.doghouse.replace(newDoghouse);
      this.doghouseStaging.push(name);
    }
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
}

export const GameState = new GameStateObject();
