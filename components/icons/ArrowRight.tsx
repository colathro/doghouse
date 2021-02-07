import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G, Ellipse } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const ArrowRight: React.FC = () => {
  return (
    <Svg viewBox="0 0 800 800" height={30} width={30}>
      <Path
        fill="#000000"
        d="M781.16 399.64L431.92 749.38l-62.29-62.36 234.74-235.06H18.84v-99h590.15L368.57 112.89l62.37-62.27 287.51 287.11.43-.44 62.28 62.35z"
      />
    </Svg>
  );
};
