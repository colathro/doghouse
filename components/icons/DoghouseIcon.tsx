import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const DoghouseIcon: React.FC = () => {
  return (
    <Svg viewBox="0 0 800 800" height={30} width={30}>
      <Path
        fill="#000000"
        d="M800 474.33l-72.76 86.28L601 410.92V800h-91.63V540.61c0-71.63-49-129.69-109.37-129.69S290.63 469 290.63 540.61V800h-96.07V419.68L74.24 562.36 0 474.33 400 0z"
      />
    </Svg>
  );
};
