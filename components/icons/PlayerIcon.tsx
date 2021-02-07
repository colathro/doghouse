import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G, Ellipse } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const PlayerIcon: React.FC = () => {
  return (
    <Svg viewBox="0 0 800 800" height={30} width={30}>
      <Path fill="#000000" d="M94.5 799.5a305 305 0 01610 0z" />
      <Path
        fill="#000000"
        d="M399.5 496A304.26 304.26 0 01704 799H95a304.25 304.25 0 01304.5-303m0-1C231 495 94.27 631.51 94 800h611c-.27-168.49-137-305-305.5-305z"
      />
      <Ellipse fill="#000000" cx={400} cy={299.5} rx={151.5} ry={181} />
      <Path
        fill="#000000"
        d="M400 119c40.3 0 78.2 18.75 106.71 52.8S551 251.25 551 299.5s-15.73 93.6-44.29 127.7S440.3 480 400 480s-78.2-18.75-106.71-52.8S249 347.75 249 299.5s15.73-93.6 44.29-127.7S359.7 119 400 119m0-1c-83.95 0-152 81.26-152 181.5S316.05 481 400 481s152-81.26 152-181.5S484 118 400 118z"
      />
    </Svg>
  );
};
