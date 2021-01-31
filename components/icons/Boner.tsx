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
        d="M716.89 230.18A91.39 91.39 0 01603 264.38a57 57 0 01-8.5 19.14l-4.6 7.21c-1 1.86-2 3.69-3.19 5.49L300.94 743.76a91.51 91.51 0 11-121.54 98.89c-29 20.61-68.8 22.26-100.72 1.83a91.42 91.42 0 0186.09-160.71 56.69 56.69 0 018.49-19.15l4.6-7.21q1.47-2.79 3.2-5.49l285.72-447.53a90.56 90.56 0 01-18.16-8.72A91.59 91.59 0 11547.3 41.35a90.52 90.52 0 0141 64.15c29-20.62 68.78-22.26 100.72-1.84a91.68 91.68 0 0127.87 126.52z"
        fill="#fcffdf"
        stroke="#231f20"
        strokeMiterlimit={10}
        strokeWidth={60}
      />
    </Svg>
  );
};
