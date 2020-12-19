import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const AddIcon: React.FC = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 80 80">
      <Circle cx={40} cy={40} r={39} fill="black" />
      <Path d="M40 1.5A38.5 38.5 0 111.5 40 38.54 38.54 0 0140 1.5m0-1A39.5 39.5 0 1079.5 40 39.49 39.49 0 0040 .5z" />
      <Path fill="#fff" d="M32 13.5h16v53H32z" />
      <Path fill="#fff" d="M13.5 32h53v16h-53z" />
    </Svg>
  );
};
