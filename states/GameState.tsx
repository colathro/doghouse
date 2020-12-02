import { makeAutoObservable } from "mobx";
import { Players } from "../components";
import { Player } from "../types";

class GameStateObject {
  constructor() {
    makeAutoObservable(this);
  }

  public players: Player[] = [
    { name: "colton", selected: false },
    { name: "daniel", selected: false },
    { name: "michael", selected: false },
    { name: "matt", selected: false },
    { name: "carlos", selected: false },
    { name: "juan", selected: false },
  ];

  addPlayer(name: string) {
    if (typeof name != "undefined" && name !== "") {
      var player: Player = { name: name, selected: false };
      this.players.push(player);
    }
  }

  removePlayer(ind: number) {
    // delete keyword does not work as this.players is converted to a
    // MobX Observed Array, so changes won't be found.
    if (this.players[ind].selected) {
      this.players.splice(ind, 1);
    } else {
      this.players[ind].selected = true;
      setTimeout(() => {
        this.resetPlayer(ind);
      }, 2000);
    }
  }

  async resetPlayer(ind: number) {
    try {
      this.players[ind].selected = false;
    } catch {}
  }
}

export const GameState = new GameStateObject();
