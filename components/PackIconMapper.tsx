import React from "react";
import { ViewStyle } from "react-native";
import { BoneMartiniIcon } from "./icons/BoneMartiniIcon";
import { FourTwenty } from "./icons/packs/FourTwenty";
import { GirlsNight } from "./icons/packs/GirlsNight";
import { KissAndTell } from "./icons/packs/KissAndTell";

type props = {
  packName: string;
  style: ViewStyle;
};

export const PackIconMapper: React.FC<props> = (props: props): JSX.Element => {
  const packs = {
    "420": <FourTwenty style={props.style}></FourTwenty>,
    "Kiss & Tell": <KissAndTell style={props.style}></KissAndTell>,
    "Girl's Night": <GirlsNight style={props.style}></GirlsNight>,
  };

  if (packs[props.packName] == undefined) {
    return <BoneMartiniIcon style={props.style} />;
  }

  return packs[props.packName];
};
