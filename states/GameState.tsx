import { makeAutoObservable } from "mobx";

class GameStateObject {
  constructor() {
    makeAutoObservable(this);
  }

  public players: string[] = [
    "colton",
    "matt",
    "owyn",
    "zach",
    "ariana",
    "megan",
  ];

  addPlayer(name: string) {
    if (typeof name!='undefined' && name !== "") {
      this.players.push(name);
    }
  }

  removePlayer(ind: number) {
    // delete keyword does not work as this.players is converted to a
    // MobX Observed Array, so changes won't be found.
    this.players.splice(ind, 1);
  }
}

export const GameState = new GameStateObject();
