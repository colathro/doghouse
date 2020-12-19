import { Card } from "../types";

export interface CardPack {
  name: string;
  prompt: string;
  cards: Array<Card>;
}
