import React from "react";
import { ViewStyle } from "react-native";
import { BoneMartiniIcon } from "./icons/BoneMartiniIcon";
import { FourTwenty } from "./icons/packs/FourTwenty";
import { GirlsNight } from "./icons/packs/GirlsNight";
import { KissAndTell } from "./icons/packs/KissAndTell";

type props = {
  packName: string;
  style: ViewStyle;
  watermark: boolean;
};

export const PackIconMapper: React.FC<props> = (props: props): JSX.Element => {
  const packs = {
    "420": <FourTwenty style={props.style} fill={props.watermark ? "#ccffcc" : "#1a1a1a"}></FourTwenty>,
    "Kiss & Tell": <KissAndTell style={props.style} fill={props.watermark ? "#ffcccc" : "#1a1a1a"}></KissAndTell>,
    "Girl's Night": <GirlsNight style={props.style} fill={props.watermark ? "#ffe6ff" : "#1a1a1a"}></GirlsNight>,
  };

  if (packs[props.packName] == undefined) {
    return <BoneMartiniIcon style={props.style} />;
  }

  return packs[props.packName];
};
