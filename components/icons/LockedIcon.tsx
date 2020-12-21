import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

type props = {
  style: ViewStyle;
};

export const LockedIcon: React.FC<props> = (props: props) => {
  return (
    <Svg style={props.style} data-name="Layer 1" viewBox="0 0 80 80">
      <Path
        d="M68.27 32.93a27.69 27.69 0 00-55.37 0H7v41.25h66V32.93zM43 54v11h-7V54a6.5 6.5 0 117 0zM22.33 33a18.27 18.27 0 0136.52 0z"
        fill="red"
      />
    </Svg>
  );
};
