import { makeAutoObservable } from "mobx";

class GameState {
  constructor() {
    makeAutoObservable(this);
  }

  public players: string[] = ["Colton"];

  addPlayer(name: string) {
    this.players.push(name);
  }

  removePlayer() {
    this.players.pop();
  }
}

export const game = new GameState();
