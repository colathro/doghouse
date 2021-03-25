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
};

export const FourTwenty: React.FC<props> = (props: props) => {
  return (
    <Svg style={props.style} viewBox="0 0 79.2 69.48">
      <Path
        fill="#1a1a1a"
        d="M25.72 50.48c8.05-2.84 14.85-4.37 15.19-3.42s-5.93 4-14 6.85a67.79 67.79 0 01-15.18 3.43 67.59 67.59 0 0113.99-6.86z"
      />
      <Path
        fill="#1a1a1a"
        d="M21.2 41.3c11.41 1.94 20.41 4.94 20.11 6.7s-9.79 1.64-21.2-.3A70.83 70.83 0 010 41a71.12 71.12 0 0121.2.3z"
      />
      <Path
        fill="#1a1a1a"
        d="M25.89 28.07C36 37 42.89 45.8 41.21 47.69S30 43.88 19.83 34.94A70.53 70.53 0 014.51 15.32a70.32 70.32 0 0121.38 12.75z"
      />
      <Path
        fill="#1a1a1a"
        d="M53.47 50.48c-8-2.84-14.84-4.37-15.18-3.42s5.92 4 14 6.85a67.93 67.93 0 0015.19 3.43 67.52 67.52 0 00-14.01-6.86z"
      />
      <Path
        fill="#1a1a1a"
        d="M58 41.3c-11.41 1.94-20.42 4.94-20.12 6.7s9.8 1.64 21.2-.3A71 71 0 0079.2 41a71.19 71.19 0 00-21.2.3z"
      />
      <Path
        fill="#1a1a1a"
        d="M53.3 28.07C43.17 37 36.31 45.8 38 47.69s11.25-3.81 21.38-12.75a70.3 70.3 0 0015.3-19.62A70.45 70.45 0 0053.3 28.07z"
      />
      <Path
        fill="#1a1a1a"
        d="M43.42 24.47c0 13.51-1.72 24.47-3.85 24.47s-3.85-11-3.85-24.47A82 82 0 0139.57 0a82 82 0 013.85 24.47z"
      />
      <Path
        fill="#1a1a1a"
        d="M44 69.35l-3.12-2.61a.61.61 0 01-.18-.27c-1.16-3.66-.53-1.64-1.46-4.83a.5.5 0 010-.12l-1.36-18.73a1.28 1.28 0 011.28-1.28 1.29 1.29 0 011.28 1.28l2.53 18c0 .53 1.54 5.56 2 8a.58.58 0 01-.97.56z"
      />
    </Svg>
  );
};
