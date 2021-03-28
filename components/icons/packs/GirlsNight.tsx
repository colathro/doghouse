import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, {
  SvgProps,
  Defs,
  Mask,
  G,
  Image,
  Rect,
  Path,
  Circle,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

type props = {
  style: ViewStyle;
  fill: any;
};

export const GirlsNight: React.FC<props> = (props: props) => {
  return (
    <Svg style={props.style} viewBox="0 0 39.11 69.05">
      <Path
        fill={props.fill}
        d="M22.29.2a17.55 17.55 0 00-2.73-.2 17.77 17.77 0 00-2.74.2 19.55 19.55 0 000 38.71 17.77 17.77 0 002.74.2 17.55 17.55 0 002.73-.2 19.55 19.55 0 000-38.71zm0 33.76a14.52 14.52 0 01-5.47 0 14.67 14.67 0 012.74-29.07 14.44 14.44 0 012.73.26 14.66 14.66 0 010 28.81z"
      />
      <Path
        fill={props.fill}
        d="M19.56 34.44a17.44 17.44 0 002.73-.22v34.83h-5.47V34.22a17.57 17.57 0 002.74.22z"
      />
      <Path
        fill={props.fill}
        d="M34 54.38a20.15 20.15 0 00.18 2.72H4.89v-5.46h29.33a20.45 20.45 0 00-.22 2.74z"
      />
    </Svg>
  );
};
