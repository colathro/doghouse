import { Card } from "../types";

export interface CardPack {
  name: string;
  prompt: string;
  maxDoghouse: number;
  purchased: boolean;
  mature: boolean;
  cards: Array<Card>;
}
