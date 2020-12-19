import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const RemoveIcon: React.FC = () => {
  return (
    <Svg height={22} width={22} data-name="Layer 1" viewBox="0 0 80 80">
      <Circle cx={40} cy={40} r={39.5} fill="red" />
      <Path
        fill="#f2f2f2"
        d="M15.603 26.919l11.314-11.314L64.394 53.08 53.08 64.395z"
      />
      <Path
        fill="#f2f2f2"
        d="M15.115 52.606L52.59 15.129l11.314 11.314-37.477 37.476z"
      />
    </Svg>
  );
};
