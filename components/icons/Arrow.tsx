import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const Arrow: React.FC = () => {
  return (
    <Svg viewBox="0 0 800 800" height={30} width={30}>
      <Path
        fill="#000000"
        d="M37.19 347.63l60.4-104.62L400 417.61l302.41-174.6 60.4 104.62L400 557.09 37.19 347.63z"
      />
      <Path
        fill="#000000"
        d="M702.22 243.7l59.9 103.74-240.82 139-121.3 70-121.3-70-240.82-139 59.9-103.74L399.5 417.9l.5.28.5-.28 301.72-174.2m.37-1.37L400 417 97.41 242.33l-60.9 105.48L278.2 487.35 400 557.67l121.8-70.32 241.69-139.54-60.9-105.48z"
      />
    </Svg>
  );
};
