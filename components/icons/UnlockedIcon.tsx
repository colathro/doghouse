import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

type props = {
  style: ViewStyle;
};

export const UnlockedIcon: React.FC<props> = (props: props) => {
  return (
    <Svg style={props.style} data-name="Layer 1" viewBox="0 0 80 80">
      <Path
        d="M68.27 32.93a27.69 27.69 0 00-47.42-18.84l7.76 5.66a18.25 18.25 0 0130.24 13.18H31V33H7v41.18h66V32.93zM43 54v11h-7V54a6.5 6.5 0 117 0z"
        fill="#0f0"
      />
    </Svg>
  );
};
