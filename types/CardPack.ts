import { Card } from "../types";

export interface CardPack {
  name: string;
  prompt: string;
  purchased: boolean;
  mature: boolean;
  cards: Array<Card>;
}
