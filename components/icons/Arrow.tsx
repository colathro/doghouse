import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const Arrow: React.FC = () => {
  return (
    <Svg data-name="Layer 1" viewBox="0 0 128 128">
      <G opacity={0.54} fill="#fbbc81">
        <Path d="M0 19.7v19.7L7.5 32l7.5-7.5L39.5 49 64 73.5 88.5 49 113 24.5l7.5 7.5 7.5 7.4V0H0v19.7z" />
        <Path d="M0 83.8V128h128V39.5l-32 32-32 32-32-32-32-32v44.3z" />
      </G>
    </Svg>
  );
};
