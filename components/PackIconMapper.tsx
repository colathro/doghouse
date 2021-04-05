import React from "react";
import { ViewStyle, View } from "react-native";
import { FourTwenty } from "./icons/packs/FourTwenty";
import { GirlsNight } from "./icons/packs/GirlsNight";
import { KissAndTell } from "./icons/packs/KissAndTell";
import { Standard } from "./icons/packs/Standard";
import { StandardPlus } from "./icons/packs/StandardPlus";

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
    "Standard": <Standard style={props.style} fill={props.watermark ? "#ffe0cc" : "#1a1a1a"}></Standard>,
    "Standard Plus": <StandardPlus style={props.style} fill={props.watermark ? "#ffe0cc" : "#1a1a1a"} fill2={props.watermark ? "#fff0e6" : "#ff6700"}></StandardPlus>,
  };
  if (packs[props.packName] == undefined) {
    return <View />
  }

  return packs[props.packName];
};
