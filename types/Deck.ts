import { Card } from "../types";

export interface Deck {
  name: string;
  prompt: string;
  help: string;
  maxDoghouse: number;
  cards: Array<Card>;
  useTimer: boolean;
}