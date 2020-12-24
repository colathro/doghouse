import { Card } from "../types";

export interface CardPack {
  name: string;
  prompt: string;
  maxDoghouse: number;
  cards: Array<Card>;
}
