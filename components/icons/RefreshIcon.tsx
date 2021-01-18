import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const RefreshIcon: React.FC = () => {
  return (
    <Svg width={30} height={30} viewBox="0 0 623 623">
      <Circle cx={311.81} cy={311.81} r={297.5} fill="black" stroke="black" />
      <Circle cx={311.81} cy={311.81} r={188.22} fill="#fff" />
      <Path
        fill="#fff"
        d="M458.86 96.01l.14 58.53-154.66-.36-.14-58.54 154.66.37z"
      />
      <Path d="M283.46 233.28H128.31V82.53h155.15z" fill="black" />
      <Path d="M304.2 266h-59V70.54h59z" fill="black" />
      <Circle cx={311.81} cy={311.81} r={124} fill="black" stroke="black" />
      <Path
        fill="#fff"
        d="M362.73 250.3l-58.53.14.36-154.66 58.54-.14-.37 154.66z"
      />
    </Svg>
  );
};
