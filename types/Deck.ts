import { Card } from "../types";

export interface Deck {
  name: string;
  prompt: string;
  maxDoghouse: number;
  cards: Array<Card>;
}