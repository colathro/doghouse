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

export const Dice6: React.FC<props> = (props: props) => {
  return (
    <Svg style={props.style} viewBox="0 0 320 320" {...props}>
      <G data-name={6}>
        <Rect
          x={15.5}
          y={15.5}
          width={289}
          height={289}
          rx={16.15}
          fill="#ff6700"
        />
        <Path
          d="M288.35 21A10.67 10.67 0 01299 31.65v256.7A10.67 10.67 0 01288.35 299H31.65A10.67 10.67 0 0121 288.35V31.65A10.67 10.67 0 0131.65 21h256.7m0-11H31.65A21.65 21.65 0 0010 31.65v256.7A21.65 21.65 0 0031.65 310h256.7A21.65 21.65 0 00310 288.35V31.65A21.65 21.65 0 00288.35 10z"
          fill="#1a1a1a"
        />
        <Circle cx={90} cy={160} r={24.5} fill="#1a1a1a" />
        <Path d="M90 141a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        <G opacity={0.75} fill="#443f3f" mask="url(#prefix__c)">
          <Circle cx={90} cy={160} r={24.5} />
          <Path d="M90 141a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        </G>
        <Circle cx={230} cy={90} r={24.5} fill="#1a1a1a" />
        <Path d="M230 71a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        <G opacity={0.75} fill="#443f3f" mask="url(#prefix__d)">
          <Circle cx={230} cy={90} r={24.5} />
          <Path d="M230 71a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        </G>
        <Circle cx={90} cy={230} r={24.5} fill="#1a1a1a" />
        <Path d="M90 211a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        <G opacity={0.75} fill="#443f3f" mask="url(#prefix__e)">
          <Circle cx={90} cy={230} r={24.5} />
          <Path d="M90 211a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        </G>
        <Circle cx={230} cy={230} r={24.5} fill="#1a1a1a" />
        <Path d="M230 211a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        <G opacity={0.75} fill="#443f3f" mask="url(#prefix__f)">
          <Circle cx={230} cy={230} r={24.5} />
          <Path d="M230 211a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        </G>
        <Circle cx={90} cy={90} r={24.5} fill="#1a1a1a" />
        <Path d="M90 71a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        <G opacity={0.75} fill="#443f3f" mask="url(#prefix__g)">
          <Circle cx={90} cy={90} r={24.5} />
          <Path d="M90 71a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        </G>
        <Circle cx={230} cy={160} r={24.5} fill="#1a1a1a" />
        <Path d="M230 141a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        <G opacity={0.75} fill="#443f3f" mask="url(#prefix__h)">
          <Circle cx={230} cy={160} r={24.5} />
          <Path d="M230 141a19 19 0 11-19 19 19 19 0 0119-19m0-11a30 30 0 1030 30 30 30 0 00-30-30z" />
        </G>
      </G>
    </Svg>
  );
};
