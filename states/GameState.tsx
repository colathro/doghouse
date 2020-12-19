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

  public activeCard: Card = {} as Card;

  public activeDeck = 0;

  public activePhase = this.gamePhase.ROLL;

  nextGamePhase() {
    switch(this.activePhase) {
      case this.gamePhase.ROLL:
        this.rollDice();
        break;
      case this.gamePhase.DRAW:
        this.drawCard();
        break;
      case this.gamePhase.PLAY:
        // code block
        break;
      case this.gamePhase.DOGHOUSE:
        break;
    }
    this.activePhase = (this.activePhase + 1) % 4;
  }

  private drawCard() {
    if (this.activePacks[this.activeDeck].cards.length == 0){
      this.activeCard = {} as Card;
    } else {
      var index = Math.floor(Math.random() * (this.activePacks[this.activeDeck].cards.length - 1))
      this.activeCard = this.activePacks[this.activeDeck].cards[index];
      this.activePacks[this.activeDeck].cards.splice(index, 1);
    }
  }

  addCardPack(pack: CardPack){
    this.cardPacks.push(pack);
  }

  private rollDice(){
    this.activeDeck = Math.floor(Math.random() * (this.activePacks.length - 1));
  }

  startGame() {
    this.activeCard = {} as Card;
    this.activePhase = this.gamePhase.ROLL;
    this.activePacks = JSON.parse(JSON.stringify(this.cardPacks));
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
