import { Card } from "../types";

export interface CardPack {
  name: string;
  purchased: boolean;
  breeds: Array<Card>;
  barkOrBite: Array<Card>;
  dogFight: Array<Card>;
  doghouseOrDare: Array<Card>;
  throwABone: Array<Card>;
  teachersPet: Array<Card>;
}
