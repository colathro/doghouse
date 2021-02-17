import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

type props = {
  style: ViewStyle;
};

export const Boner: React.FC<props> = (props: props) => {
  return (
    <Svg style={props.style} data-name="Layer 1" viewBox="0 0 1024 1024">
      <Path
        d="M730 206.4a92.5 92.5 0 01-126.16 86.12L301.48 594.87a92.46 92.46 0 11-164.39 71.55c-2.29.18-4.61.26-6.94.26a92.46 92.46 0 1133.7-178.58l302.36-302.35a92.46 92.46 0 11164.39-71.56c2.29-.17 4.61-.25 6.94-.25A92.46 92.46 0 01730 206.4z"
        fill="#fcffdf"
        stroke="#231f20"
        strokeMiterlimit={10}
        strokeWidth={70}
      />
    </Svg>
  );
};
