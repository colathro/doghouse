import * as React from "react";
import Svg, { Defs, ClipPath, Path, G, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

type props = {
  style: any;
};

export const Joker: React.FC<props> = (props: props) => {
  return (
    <Svg style={props.style} viewBox="0 0 517 745">
      <Path
        d="M349 380.62c-.07.8 4 46.79 13.87 56.4l8-1.38s18.65-38.62 16.47-49.36-38.34-5.66-38.34-5.66z"
        fill="#f0ea4e"
      />
      <Path
        d="M349 380.62c.41 4.88 1.08 9.73 1.79 14.57s1.54 9.65 2.5 14.44a140.31 140.31 0 003.55 14.2 64.91 64.91 0 002.53 6.83 21 21 0 003.81 6l-.39-.12 7.95-1.39-.34.26q5-10.51 9.3-21.33c1.44-3.6 2.8-7.23 4-10.9a77.25 77.25 0 003-11.19 18.24 18.24 0 00.22-5.65 5.27 5.27 0 00-1.25-2.35 8.33 8.33 0 00-2.26-1.62 20.7 20.7 0 00-5.43-1.77 50.06 50.06 0 00-5.74-.75 128 128 0 00-23.24.77zm0 0q5.77-.83 11.6-1.18a94.66 94.66 0 0111.67-.1 49.66 49.66 0 015.82.69 21.73 21.73 0 015.63 1.74 9.15 9.15 0 012.47 1.74 5.83 5.83 0 011.48 2.71 18.18 18.18 0 01-.14 5.94 78.24 78.24 0 01-2.95 11.33c-1.21 3.7-2.56 7.35-4 11-2.84 7.24-6 14.35-9.34 21.38l-.11.21-.24.05-8 1.35h-.23l-.16-.16a21.63 21.63 0 01-4-6.32 60 60 0 01-2.53-6.94 144.6 144.6 0 01-3.37-14.33c-.9-4.81-1.65-9.66-2.24-14.52s-1.1-9.7-1.36-14.59z"
        fill="#231f20"
      />
      <Path
        d="M372.51 368.9c-.08.81 4.05 47.12 14 56.78l8-1.38s18.77-38.89 16.58-49.7-38.58-5.7-38.58-5.7z"
        fill="#fbed2f"
      />
      <Path
        d="M372.51 368.9c.41 4.91 1.08 9.79 1.8 14.66s1.55 9.73 2.52 14.55a142.23 142.23 0 003.56 14.3 63.74 63.74 0 002.56 6.88 21 21 0 003.83 6.07l-.39-.12 8-1.4-.34.26q5-10.59 9.37-21.48c1.44-3.62 2.82-7.28 4-11a76.62 76.62 0 003-11.26 18.51 18.51 0 00.22-5.69 5.2 5.2 0 00-1.26-2.37 8.51 8.51 0 00-2.27-1.64 21 21 0 00-5.47-1.77 48.61 48.61 0 00-5.78-.76 128.86 128.86 0 00-23.35.77zm0 0c3.87-.56 7.77-.94 11.68-1.19a95.94 95.94 0 0111.75-.1 50.33 50.33 0 015.86.69 22.05 22.05 0 015.67 1.76 9.08 9.08 0 012.48 1.75 5.88 5.88 0 011.49 2.72 18.42 18.42 0 01-.14 6 77.73 77.73 0 01-3 11.41c-1.22 3.73-2.58 7.41-4 11.06-2.86 7.29-6 14.45-9.41 21.53l-.1.21h-.24l-8 1.37h-.23l-.16-.16a22 22 0 01-4-6.37 60.17 60.17 0 01-2.54-7 143 143 0 01-3.39-14.42q-1.37-7.16-2.23-14.55c-.64-4.89-1.2-9.79-1.49-14.71z"
        fill="#231f20"
      />
      <Path
        d="M387.12 382.19c.1.82 14.35 46.23 26.37 53.73l7.71-3.14s10.27-43 5.72-53.32-39.8 2.73-39.8 2.73z"
        fill="#f0ea4e"
      />
      <Path
        d="M387.12 382.19c1.48 4.82 3.22 9.55 5 14.27s3.67 9.39 5.7 14a146.32 146.32 0 006.69 13.54 67.14 67.14 0 004.05 6.32 21.59 21.59 0 005.17 5.23h-.41l7.71-3.15-.28.32c1.78-7.78 3.34-15.64 4.67-23.52.65-3.94 1.23-7.9 1.64-11.86a78 78 0 00.52-11.92 18.22 18.22 0 00-1-5.74 5.31 5.31 0 00-1.78-2.1 8.71 8.71 0 00-2.63-1.14 21.65 21.65 0 00-5.86-.58 49.58 49.58 0 00-6 .51 130 130 0 00-23.19 5.82zm0 0c3.75-1.41 7.56-2.64 11.42-3.74a97.18 97.18 0 0111.73-2.67 52.31 52.31 0 016-.59 22.14 22.14 0 016.06.52 9.33 9.33 0 012.86 1.21 6.12 6.12 0 012.09 2.39 19 19 0 011.15 6 79.57 79.57 0 01-.47 12.06c-.4 4-1 8-1.6 11.93-1.27 7.92-2.87 15.77-4.7 23.58l-.06.24-.22.09-7.72 3.12-.22.09-.19-.13a22.3 22.3 0 01-5.39-5.49 63.29 63.29 0 01-4.07-6.43 146.28 146.28 0 01-6.54-13.67q-3-7-5.47-14.13c-1.66-4.75-3.3-9.57-4.66-14.38z"
        fill="#231f20"
      />
      <Path
        d="M408.39 365.62c.08.77 10.44 35.08 21.73 53.19 2.78 4.47 5.61 7.95 8.37 9.71l9-3.57s12.46-50 7.28-62-46.38 2.67-46.38 2.67z"
        fill="#efd313"
      />
      <Path
        d="M408.39 365.62c1.66 5.64 3.62 11.18 5.63 16.7s4.16 11 6.45 16.38a169.67 169.67 0 007.64 15.84 77.41 77.41 0 004.63 7.42 24.47 24.47 0 006 6.18h-.41l9-3.58-.28.32q3.26-13.57 5.72-27.35c.8-4.58 1.52-9.19 2.05-13.81.27-2.31.49-4.62.62-6.94a64.34 64.34 0 00.12-6.94 21.89 21.89 0 00-1.14-6.73 6.24 6.24 0 00-2.08-2.48 10.07 10.07 0 00-3.06-1.37 25.23 25.23 0 00-6.84-.73 60 60 0 00-6.94.52 153 153 0 00-27.11 6.57zm0 0c4.39-1.58 8.84-3 13.35-4.2a115.77 115.77 0 0113.69-2.94 58.51 58.51 0 017-.61 25.32 25.32 0 017 .68 10.74 10.74 0 013.3 1.43 6.93 6.93 0 012.38 2.79 21.89 21.89 0 011.27 7 65.89 65.89 0 01-.09 7c-.13 2.34-.34 4.67-.61 7-.51 4.65-1.21 9.27-2 13.88-1.58 9.2-3.53 18.33-5.75 27.41l-.06.23-.22.09-9 3.55-.22.08-.19-.12a25.24 25.24 0 01-6.2-6.43 73.06 73.06 0 01-4.65-7.54 168.44 168.44 0 01-7.49-16q-3.36-8.16-6.22-16.5c-1.9-5.55-3.74-11.13-5.29-16.8z"
        fill="#231f20"
      />
      <Path
        d="M449.36 387.13c.22.61 6.62 24.26 17.16 27.8l11.69 2.22a2.76 2.76 0 003.29-2.67c.12-8.45 0-30.76-4.3-36.44-5.35-7.04-27.84 9.09-27.84 9.09z"
        fill="#f0ea4e"
      />
      <Path
        d="M449.36 387.13a93.21 93.21 0 006.33 15.52 41 41 0 004.54 7 15 15 0 006.42 4.9l10.35 1.91 1.3.24a2.32 2.32 0 002.6-1.55 3.88 3.88 0 00.1-1.15v-4a178.92 178.92 0 00-1.14-21.1c-.11-.87-.23-1.74-.39-2.6l-.23-1.29-.3-1.28a17.55 17.55 0 00-1.73-4.84 4.39 4.39 0 00-4.08-2.27 15.76 15.76 0 00-5.1.81 55.79 55.79 0 00-9.65 4.22c-3.06 1.68-6.08 3.52-9.02 5.48zm0 0a96.56 96.56 0 018.88-5.79 52 52 0 019.65-4.49 16.27 16.27 0 015.3-.93 6 6 0 012.72.6 4.44 4.44 0 012 2 17.32 17.32 0 011.9 5.07l.3 1.3.24 1.32c.18.87.3 1.75.42 2.63.49 3.52.77 7.06.95 10.59s.28 7.08.27 10.62v3.99a4.41 4.41 0 01-.17 1.44 3.22 3.22 0 01-2.13 2.09 3.26 3.26 0 01-1.52.08l-1.31-.25-10.41-2h-.05a15.65 15.65 0 01-6.69-5.26 40.39 40.39 0 01-4.48-7.17 73.19 73.19 0 01-3.31-7.74c-.99-2.72-1.83-5.39-2.56-8.1z"
        fill="#231f20"
      />
      <Path
        d="M310.32 374c-.08.8 4 46.79 13.86 56.4l8-1.38s18.64-38.62 16.47-49.36-38.33-5.66-38.33-5.66z"
        fill="#f0ea4e"
      />
      <Path
        d="M310.32 374c.41 4.88 1.08 9.73 1.79 14.57s1.54 9.65 2.5 14.45a143.49 143.49 0 003.54 14.19 62.81 62.81 0 002.54 6.83 20.79 20.79 0 003.81 6l-.39-.12 7.95-1.39-.34.26q4.95-10.51 9.3-21.33c1.44-3.6 2.8-7.23 4-10.9a75.62 75.62 0 003-11.19 18 18 0 00.23-5.65 5.19 5.19 0 00-1.26-2.35 8.34 8.34 0 00-2.25-1.62 20.7 20.7 0 00-5.43-1.77 50.06 50.06 0 00-5.74-.75 128 128 0 00-23.25.77zm0 0c3.85-.55 7.72-.93 11.6-1.18a94.64 94.64 0 0111.67-.1 49.91 49.91 0 015.82.69 21.73 21.73 0 015.63 1.74 9.15 9.15 0 012.47 1.74 6 6 0 011.48 2.71 18.18 18.18 0 01-.15 5.94 76.62 76.62 0 01-2.94 11.33c-1.21 3.7-2.57 7.36-4 11-2.85 7.24-6 14.35-9.35 21.38l-.1.22h-.24l-8 1.35h-.24l-.15-.16a21.66 21.66 0 01-4-6.32 60 60 0 01-2.52-6.94 144.6 144.6 0 01-3.3-14.26c-.9-4.81-1.65-9.66-2.25-14.52s-1.14-9.72-1.43-14.62z"
        fill="#231f20"
      />
      <Path
        d="M342 390.45c-.18.42-5.85 25.95-2.19 32.83l4.54.62s16.69-17.66 17.35-23.83-19.7-9.62-19.7-9.62z"
        fill="#b4c235"
      />
      <Path
        d="M342 390.45c-.57 2.71-1 5.45-1.45 8.18s-.79 5.49-1.08 8.24a78.86 78.86 0 00-.47 8.26 37.09 37.09 0 00.2 4.09 11.76 11.76 0 001 3.84l-.34-.23 4.54.6-.41.15c3-3.22 5.87-6.54 8.67-9.91 1.4-1.7 2.76-3.42 4-5.19a42.68 42.68 0 003.52-5.5 10.16 10.16 0 001.08-2.94 3.3 3.3 0 00-1.15-2.63 17.64 17.64 0 00-5.53-3.27 76.24 76.24 0 00-12.58-3.69zm0 0c2.18.32 4.34.76 6.48 1.28a52.64 52.64 0 016.35 1.91 18 18 0 015.83 3.28 5.36 5.36 0 011.07 1.4 3.55 3.55 0 01.36 1.8 10.66 10.66 0 01-1.1 3.25 45.32 45.32 0 01-3.54 5.64c-1.29 1.8-2.65 3.54-4 5.26-2.77 3.44-5.69 6.74-8.72 10l-.17.18h-.24l-4.53-.64h-.24l-.1-.2a12.53 12.53 0 01-1.07-4.17 32.77 32.77 0 01-.16-4.2 79.71 79.71 0 01.68-8.33c.35-2.75.79-5.5 1.33-8.22s1.02-5.56 1.77-8.24z"
        fill="#231f20"
      />
      <Path
        d="M393 505.9c.08-.8 13.08-45.11 24.61-52.6l7.54 2.9s10.74 41.52 6.51 51.62S393 505.9 393 505.9z"
        fill="#f0ea4e"
      />
      <Path
        d="M393 505.9c1.24-4.74 2.73-9.4 4.26-14s3.21-9.26 5-13.8a141.43 141.43 0 016.1-13.39 61.78 61.78 0 013.83-6.32 22 22 0 015.13-5.42l.19-.13.22.09 7.55 2.88.22.09.06.23c1.92 7.55 3.62 15.14 5 22.8.69 3.83 1.31 7.67 1.77 11.54a77.25 77.25 0 01.67 11.69 18.17 18.17 0 01-1 5.85 5.94 5.94 0 01-2 2.37 9.17 9.17 0 01-2.76 1.22 21.59 21.59 0 01-5.87.61 47.39 47.39 0 01-5.84-.46 96.17 96.17 0 01-11.43-2.37c-3.7-1.06-7.42-2.19-11.1-3.48zm0 0a127.12 127.12 0 0022.64 5.26 48.61 48.61 0 005.77.38 20.74 20.74 0 005.68-.66 8.39 8.39 0 002.52-1.16 5.12 5.12 0 001.69-2.06 18.11 18.11 0 00.89-5.58 77.24 77.24 0 00-.73-11.55c-.47-3.84-1.1-7.67-1.81-11.48q-2.15-11.43-5-22.73l.29.32-7.53-2.92h.41a20.73 20.73 0 00-4.92 5.17 65.23 65.23 0 00-3.82 6.2 145.2 145.2 0 00-6.25 13.23c-1.88 4.51-3.61 9.09-5.27 13.68s-3.2 9.2-4.56 13.9z"
        fill="#231f20"
      />
      <Path
        d="M318.09 494.48c.08-.8 13.08-45.11 24.61-52.6l7.54 2.9s10.76 41.52 6.51 51.62-38.66-1.92-38.66-1.92z"
        fill="#f0ea4e"
      />
      <Path
        d="M318.1 494.48c1.23-4.74 2.72-9.4 4.25-14.05s3.22-9.26 5-13.8a144 144 0 016.1-13.39 60.13 60.13 0 013.84-6.32 21.62 21.62 0 015.13-5.42l.18-.13.23.09 7.54 2.88.22.09.06.23c1.93 7.54 3.62 15.14 5 22.8.68 3.83 1.3 7.67 1.76 11.54a78.57 78.57 0 01.68 11.69 18.19 18.19 0 01-1 5.85 5.86 5.86 0 01-2 2.37 9.07 9.07 0 01-2.76 1.22 21.59 21.59 0 01-5.87.61 47.54 47.54 0 01-5.84-.46 98.46 98.46 0 01-11.42-2.37c-3.72-1.01-7.44-2.14-11.1-3.43zm0 0a127 127 0 0022.63 5.26 48.64 48.64 0 005.78.38 20.67 20.67 0 005.67-.66 8.39 8.39 0 002.52-1.16 5 5 0 001.69-2.06 18.11 18.11 0 00.89-5.58 78.57 78.57 0 00-.72-11.55c-.48-3.84-1.11-7.67-1.81-11.48q-2.16-11.43-5-22.73l.28.32-7.53-2.92h.41a20.73 20.73 0 00-4.92 5.17 65.14 65.14 0 00-3.81 6.2 140.06 140.06 0 00-6.18 13.19c-1.88 4.51-3.62 9.09-5.28 13.68s-3.28 9.24-4.62 13.94z"
        fill="#231f20"
      />
      <Path
        d="M354 488.78c-.1-.44-.67-26.6 4.27-32.62l4.56.27s12.92 20.58 12.37 26.76-21.2 5.59-21.2 5.59z"
        fill="#a9892f"
      />
      <Path
        d="M354 488.78c-.19-2.77-.2-5.54-.2-8.32s.12-5.55.31-8.32a77.54 77.54 0 011-8.3 32.42 32.42 0 011-4.09 12.3 12.3 0 011.87-3.88l.13-.17h.24l4.57.26h.24l.13.21c2.34 3.74 4.57 7.55 6.61 11.46 1 2 2 3.93 2.93 5.94a43.68 43.68 0 012.37 6.23 10.35 10.35 0 01.45 3.4 3.58 3.58 0 01-.71 1.7 5.18 5.18 0 01-1.32 1.16 18.09 18.09 0 01-6.36 2.08 54.21 54.21 0 01-6.59.63c-2.26.11-4.46.12-6.67.01zm0 0a75.33 75.33 0 0013.1-1.15 17.62 17.62 0 006.07-2.13 3.29 3.29 0 001.64-2.35 10 10 0 00-.49-3.1A42.5 42.5 0 00372 474c-.92-2-1.91-3.94-2.95-5.87a248.16 248.16 0 00-6.57-11.42l.37.22-4.56-.29.37-.16a11.61 11.61 0 00-1.73 3.57 35.5 35.5 0 00-1 4 80.44 80.44 0 00-1.14 8.2c-.26 2.75-.42 5.52-.56 8.28s-.23 5.47-.23 8.25z"
        fill="#231f20"
      />
      <Path
        d="M278.59 391c4.54 6.44 15.48 21.29 19.92 26.86a2 2 0 001.72.76l2.44-.14a2.05 2.05 0 001.63-1c2.5-4.05 12.33-20.42 11.86-25.82-.44-5-26.32-4.36-36-3.93a2 2 0 00-1.57 3.27z"
        fill="#b39530"
      />
      <Path
        d="M278.59 391q8 11.17 16.49 22l2.12 2.7 1.07 1.34.54.66a1.69 1.69 0 00.57.42 1.67 1.67 0 00.69.14h.84l1.71-.12a1.67 1.67 0 001.2-.62 6.33 6.33 0 00.42-.68l.44-.74c2.34-3.93 4.6-7.92 6.63-12 1-2 2-4.09 2.87-6.2a28.85 28.85 0 001.11-3.2 8.05 8.05 0 00.38-3.15 2 2 0 00-.92-1 7.06 7.06 0 00-1.46-.71 20.85 20.85 0 00-3.26-.87 61.59 61.59 0 00-6.78-.87c-4.56-.36-9.15-.47-13.73-.47q-3.43 0-6.87.14l-1.72.06a3.49 3.49 0 00-1.67.28 2.05 2.05 0 00-.67 2.89zm0 0a2.08 2.08 0 01.65-3 3.59 3.59 0 011.68-.3l1.72-.07q3.44-.15 6.88-.21c4.58-.1 9.17-.13 13.76.11a63.86 63.86 0 016.88.69 22.69 22.69 0 013.4.81 8.59 8.59 0 011.64.75 2.81 2.81 0 011.29 1.49 8.29 8.29 0 01-.34 3.62 30.56 30.56 0 01-1.1 3.31c-.84 2.16-1.82 4.25-2.85 6.3-2.09 4.1-4.4 8.08-6.79 12-.32.51-.55.95-1 1.5a2.44 2.44 0 01-1.78.87L301 419h-.89a2.51 2.51 0 01-1-.23 2.46 2.46 0 01-.78-.61l-.54-.7-1-1.37-2.05-2.76c-2.73-3.69-5.4-7.41-8.08-11.13s-5.44-7.45-8.07-11.2z"
        fill="#231f20"
      />
      <Path
        d="M270.11 387.26c0 .45 5.51 19.85 11.49 24.85l3.23 5.28s8.85-22.63 7.15-28.6-21.87-1.53-21.87-1.53z"
        fill="#f0ea4e"
      />
      <Path
        d="M270.11 387.26c.62 2.22 1.4 4.39 2.18 6.55s1.64 4.3 2.55 6.41a62.88 62.88 0 003 6.17 20.39 20.39 0 004 5.37l.06.05v.06l3.24 5.27-.84.08c1.55-4.1 3-8.26 4.32-12.44.66-2.09 1.27-4.2 1.8-6.32a43.16 43.16 0 001.2-6.42 10.58 10.58 0 00-.1-3.14 3.26 3.26 0 00-2.05-2 17.51 17.51 0 00-6.36-1 75.94 75.94 0 00-13 1.36zm0 0c2.14-.52 4.31-.92 6.49-1.24a50.13 50.13 0 016.6-.61 18.12 18.12 0 016.63.84 4 4 0 012.53 2.44 10.44 10.44 0 01.19 3.42 43.49 43.49 0 01-1.16 6.56c-.52 2.15-1.12 4.28-1.77 6.39-1.28 4.23-2.75 8.38-4.36 12.5l-.34.88-.49-.81-3.21-5.28.09.11a20.28 20.28 0 01-4.16-5.68 59.83 59.83 0 01-2.88-6.32c-.86-2.15-1.64-4.33-2.32-6.53a67.19 67.19 0 01-1.84-6.67zM77.67 501.58s-15.52 54.76-15.19 78.79 140 140.3 210.29 152.63c0 0 33.48-64.06 37.26-83.69S77.67 501.58 77.67 501.58z"
        fill="#231f20"
      />
      <Path
        d="M243.3 390.66c4.55 6.45 1.06 15.29 5.5 20.86.41.52 15.48 6.81 16.14 6.77l2.45-.14a2 2 0 001.63-1c2.49-4.05 12.32-20.42 11.85-25.82-.44-5-26.31-4.35-36-3.92a2 2 0 00-1.57 3.25z"
        fill="#b39530"
      />
      <Path
        d="M243.3 390.66a14.94 14.94 0 012.44 6.64c.35 2.35.4 4.74.66 7.09a13.59 13.59 0 002.2 6.64l.27.35a1 1 0 00.31.22l.8.38 1.62.72 3.29 1.38q3.3 1.35 6.61 2.64c1.11.41 2.24.86 3.32 1.19h.77l.89-.07.89-.06a1.68 1.68 0 001.21-.68c.13-.18.3-.49.45-.73l.91-1.52 1.78-3.08q1.77-3.09 3.4-6.24c1.08-2.11 2.16-4.22 3.11-6.38a27.52 27.52 0 002.17-6.63 3.09 3.09 0 00-.07-1.51 2.71 2.71 0 00-1.12-1 12.41 12.41 0 00-3.25-1.15 51 51 0 00-7-1.05c-4.73-.42-9.48-.54-14.23-.55-2.38 0-4.75 0-7.13.13l-1.78.05a4.82 4.82 0 00-1.74.23 2.06 2.06 0 00-.78 2.99zm0 0a2.08 2.08 0 01.77-3.05 4.76 4.76 0 011.76-.25l1.78-.08q3.55-.15 7.13-.21c4.75-.1 9.51-.12 14.27.18a52.08 52.08 0 017.11.87 13.71 13.71 0 013.49 1.14 3.46 3.46 0 011.48 1.35 2.13 2.13 0 01.22 1 7.39 7.39 0 010 1 28.82 28.82 0 01-2.17 6.91q-1.43 3.3-3.11 6.45c-1.12 2.1-2.29 4.18-3.49 6.24l-1.82 3.07-.93 1.52c-.17.27-.29.48-.51.78a2.35 2.35 0 01-.81.69 2.38 2.38 0 01-1 .27h-2.8c-1.18-.39-2.25-.85-3.36-1.3q-3.3-1.37-6.57-2.8l-3.28-1.44-1.62-.76-.8-.41a1.35 1.35 0 01-.4-.3l-.26-.37a14.21 14.21 0 01-2.11-6.78c-.25-2.37-.27-4.75-.6-7.1a14.8 14.8 0 00-2.37-6.62z"
        fill="#231f20"
      />
      <Path
        d="M229.23 170.75S303.13 44 334.3 14.64c23.92-22.5 35.81 42.4 40 73.83a9.91 9.91 0 01-13.13 10.68l-24.55-8.69 10.73 44.27s-33.81 55.3-11.88 74.34 59.5 59.48 42 89.18c0 0 63.64-60.49 103-17.34 45.1 49.45 9.08 95.82 9.08 95.82s-116.72 59-162.72 12.3c0 0-77.91 25.83-119.16-.66s112.61 118.41 224.31 77c0 0 41.38 11.35 33 29.27-24.08 51.73-54.47 53.58-104.77 48.17 0 0-65.13 146.52-85.07 155.23s-201-106.61-200.7-156.15 68.79-198.83 68.79-198.83l-40.73-79.9a2 2 0 00-3.68 1.44c9.43 32 24.53 88.72 15 94.68-13.31 8.35-107-88.21-103-131.69s45.46-35.74 51.94-44.85 1.59-69.82 24.59-60.32 64.17 118.93 83 111.74 58.88-63.41 58.88-63.41z"
        fill="#e6e7e8"
      />
      <Path d="M227.81 169.83l5.25-8.94 5.33-9q5.34-9 10.79-17.85 10.88-17.82 22.14-35.38t23-34.86c3.94-5.74 7.9-11.47 12-17.11s8.2-11.27 12.55-16.74a172.42 172.42 0 0113.83-15.79c2.52-2.49 5.67-4.94 9.69-5.55a10.83 10.83 0 015.9.87 15.68 15.68 0 014.69 3.3 38 38 0 016.3 8.87 91.57 91.57 0 014.41 9.69A178.19 178.19 0 01370 51.46c1.74 6.79 3.17 13.65 4.37 20.54.61 3.44 1.15 6.9 1.63 10.36.25 1.73.46 3.46.67 5.2l.08.66v2.42l-.07.8-.17.8-.18.78-.27.77a12.18 12.18 0 01-9.34 7.78 11.92 11.92 0 01-6.16-.63l-4.87-1.88q-9.74-3.72-19.57-7.19l1.95-1.76 10.65 44.29.14.56-.31.51a178.38 178.38 0 00-10.4 20.53 120.71 120.71 0 00-7.21 21.79 59.06 59.06 0 00-1.39 11.26A31.35 31.35 0 00331.1 200c.37.83.67 1.69 1.09 2.49l.68 1.17.33.59c.12.19.27.36.4.54a14.86 14.86 0 001.73 2.06l.95.95c.31.32.72.64 1.07 1q4.41 3.85 8.61 7.94a205.35 205.35 0 0115.89 17.2 131.68 131.68 0 0113.3 19.38 65.73 65.73 0 018 22.31 39 39 0 01-.12 12 33.86 33.86 0 01-4.21 11.37l-2.34-1.86a159.08 159.08 0 0122.23-16.88 120.12 120.12 0 0125.09-12.22 72.46 72.46 0 0113.66-3.34c.58-.08 1.16-.19 1.74-.25l1.76-.15c1.18-.07 2.35-.24 3.53-.2s2.36 0 3.54 0l3.54.3a48.5 48.5 0 0113.66 3.72 51.34 51.34 0 0111.77 7.79 14.77 14.77 0 011.29 1.21l1.24 1.25c.81.85 1.7 1.64 2.42 2.55l2.27 2.65 1.13 1.33 1.05 1.39 2.12 2.78c.7.93 1.32 1.92 2 2.88 1.35 1.9 2.5 3.93 3.68 5.94a74.93 74.93 0 019.12 26.28 72.42 72.42 0 01-1.59 27.74 80.44 80.44 0 01-4.62 13.15 68.54 68.54 0 01-7 12.11l-.09.13-.15.07A376.53 376.53 0 01450 393.78a292.39 292.39 0 01-41.61 11.34c-14.15 2.61-28.69 4-43.17 2.4a77.45 77.45 0 01-21.16-5.32 56.68 56.68 0 01-18.27-12.14l1.51.36a242.79 242.79 0 01-23.52 6.15c-7.92 1.68-15.92 3-24 3.95a189.5 189.5 0 01-24.3 1.31 121.19 121.19 0 01-24.28-2.55 87 87 0 01-11.82-3.37l-2.87-1.16-1.42-.58-1.39-.68-2.7-1.36-2.68-1.56-1.34-.79-1.26-.79c-.84-.52-1.68-1-2.52-1.45-.42-.22-.83-.43-1.23-.59a5.38 5.38 0 00-.53-.2h-.17.25a1.34 1.34 0 00.54-.3 1.29 1.29 0 00.39-.71.84.84 0 000-.35.15.15 0 000-.07 1.7 1.7 0 00.17.32 11.77 11.77 0 00.78 1.05 82.48 82.48 0 008.46 8.22c6 5.23 12.37 10.14 18.85 14.86s13.12 9.22 19.88 13.53a390.63 390.63 0 0042 23.31 289 289 0 0044.83 17.1 190.55 190.55 0 0047.17 7.58 126 126 0 0046.86-7.33l.48-.18.47.14a108.57 108.57 0 0110.6 3.59 85.58 85.58 0 0110.11 4.79 44 44 0 019.22 6.66 20.93 20.93 0 013.64 4.66 12.65 12.65 0 011.71 5.92 13.47 13.47 0 01-1.39 6c-.82 1.66-1.6 3.34-2.45 5-1.73 3.27-3.53 6.52-5.55 9.63l-1.5 2.34-1.6 2.28c-1 1.54-2.22 3-3.34 4.45a82.51 82.51 0 01-7.55 8.2 71.42 71.42 0 01-18.38 12.54 59.24 59.24 0 01-10.58 3.62 80.83 80.83 0 01-11 1.9 146.64 146.64 0 01-22.17.51c-7.37-.35-14.71-1-22-1.76l1.46-.85q-16.63 37.18-34.72 73.71c-6.05 12.17-12.25 24.27-18.76 36.21-3.26 6-6.6 11.9-10.08 17.76s-7.12 11.63-11.18 17.18a63 63 0 01-6.74 8 14.26 14.26 0 01-4.62 3.24 8.79 8.79 0 01-3 .48h-1.4l-1.36-.16a54.78 54.78 0 01-10.11-2.82c-3.25-1.16-6.41-2.49-9.53-3.88A373.93 373.93 0 01214 674a686.62 686.62 0 01-67.56-45.73c-10.78-8.3-21.32-16.94-31.4-26.11-5-4.59-10-9.32-14.69-14.24a185.6 185.6 0 01-13.47-15.47c-2.11-2.7-4.07-5.53-5.94-8.43a73.92 73.92 0 01-4.94-9.19 35.79 35.79 0 01-2.9-10.18c-.09-.89-.1-1.81-.16-2.71l.12-2.6.12-2.6.28-2.57A162.78 162.78 0 0177.14 514c.37-1.67.8-3.32 1.23-5s.83-3.3 1.29-4.95c.93-3.27 1.8-6.57 2.81-9.82 7.82-26.09 17.41-51.55 27.44-76.8s20.74-50.23 32-75v1.31l-21.17-41.44-10.59-20.71-5.3-10.36-2.65-5.17-.66-1.3-.33-.65a3.55 3.55 0 00-.2-.34.25.25 0 00-.19-.12.56.56 0 00-.34.09.28.28 0 00-.15.18.28.28 0 000 .13v.12l.1.35.82 2.79 1.63 5.59q1.6 5.61 3.14 11.22c2 7.5 4 15 5.8 22.59s3.44 15.17 4.77 22.87c.65 3.85 1.22 7.72 1.6 11.64a58.44 58.44 0 01.15 12 19.19 19.19 0 01-.63 3.14 9.26 9.26 0 01-1.58 3.2 5 5 0 01-1.63 1.36 5.8 5.8 0 01-2.07.61 10.59 10.59 0 01-3.51-.4 27.64 27.64 0 01-5.7-2.47c-1.76-1-3.45-2-5.09-3.14a166.74 166.74 0 01-18.23-14.85A341.41 341.41 0 0148 306.52a272.46 272.46 0 01-26.73-38.44 123.3 123.3 0 01-9.73-21.53 61.27 61.27 0 01-2.66-11.73c-.13-1-.18-2-.25-3s-.06-2.06 0-3.1a29.35 29.35 0 01.29-3c.14-1 .2-2 .41-3A48 48 0 0112.71 211 36.87 36.87 0 0129 193.18a57.42 57.42 0 0111.11-4.64c3.8-1.18 7.64-2.07 11.36-3 1.85-.47 3.68-.95 5.38-1.56a9.41 9.41 0 004-2.31 5.61 5.61 0 001-1.92 26.15 26.15 0 00.7-2.58c.4-1.79.69-3.67 1-5.56.53-3.78.92-7.63 1.35-11.49a182.51 182.51 0 013.59-23.25 39.72 39.72 0 014.48-11.41 14.25 14.25 0 014.78-4.77 9.88 9.88 0 013.43-1.2 11.65 11.65 0 013.54 0 16 16 0 013.22.92c.51.2 1 .47 1.53.71s.95.55 1.39.85a31.66 31.66 0 014.74 4 80.11 80.11 0 017.55 9.23c4.57 6.4 8.56 13.1 12.46 19.83 7.77 13.48 15 27.23 22.53 40.73 3.79 6.75 7.68 13.45 11.94 19.88a108.51 108.51 0 006.78 9.34 55.39 55.39 0 003.84 4.24 21.34 21.34 0 004.42 3.41 9.13 9.13 0 002.48.93 5 5 0 002.47-.17 25.22 25.22 0 004.93-2.59 69.27 69.27 0 008.92-7.25 197.72 197.72 0 0015.75-17c5-5.92 9.75-12 14.42-18.17q3.52-4.6 7-9.28l3.44-4.67zm2.85 1.84l-3.51 4.77-3.52 4.65q-3.56 4.62-7.21 9.17c-4.9 6-9.91 12-15.12 17.76s-10.56 11.44-16.3 16.71a76.69 76.69 0 01-9.16 7.34l-1.24.81-1.3.73a22.77 22.77 0 01-2.73 1.29 6.48 6.48 0 01-3.26.26 10.39 10.39 0 01-2.95-1.07 22.82 22.82 0 01-4.8-3.64 54.4 54.4 0 01-4-4.33c-2.51-3-4.81-6.17-7-9.39-4.38-6.45-8.4-13.11-12.37-19.78-7.91-13.36-15.41-26.94-23.43-40.17-4-6.6-8.16-13.12-12.69-19.28a78.69 78.69 0 00-7.29-8.66 27.44 27.44 0 00-4.15-3.44c-.37-.24-.73-.43-1.1-.66s-.71-.35-1.11-.5a11.8 11.8 0 00-2.36-.67 6.28 6.28 0 00-4.27.71 10 10 0 00-3.31 3.42 36.51 36.51 0 00-3.91 10.19 179 179 0 00-3.49 22.69c-.43 3.85-.82 7.72-1.36 11.62-.28 2-.58 3.9-1 5.89a30.53 30.53 0 01-.83 3 9.89 9.89 0 01-1.69 3.21c-.22.25-.44.51-.67.75l-.72.59a10.72 10.72 0 01-1.48 1c-.5.29-1 .49-1.49.73s-1 .39-1.48.58c-2 .7-3.88 1.2-5.78 1.69-3.8.94-7.52 1.81-11.13 2.94-7.18 2.22-14 5.57-18.91 11s-7.79 12.43-9 19.78c-.19.91-.25 1.85-.38 2.78s-.24 1.86-.27 2.75 0 1.81 0 2.72.09 1.83.21 2.74a58.09 58.09 0 002.44 10.92 118.94 118.94 0 009.34 20.83A268.75 268.75 0 0051 304.05a342.82 342.82 0 0031.44 33.88 162.74 162.74 0 0017.74 14.6c1.57 1.06 3.16 2.08 4.79 3a24.39 24.39 0 004.93 2.17 7 7 0 002.23.31 2.47 2.47 0 00.71-.19 1.68 1.68 0 00.58-.49 9.66 9.66 0 001.47-4.54 56.3 56.3 0 00-.1-11.23c-.36-3.8-.9-7.61-1.52-11.41-1.27-7.59-2.88-15.15-4.65-22.68s-3.69-15-5.71-22.49q-1.51-5.6-3.1-11.19l-1.6-5.58-.81-2.78-.11-.35c0-.18-.08-.4-.12-.6a3.65 3.65 0 01.07-1.31 3.5 3.5 0 011.53-2.1 3.76 3.76 0 012.44-.56 3.47 3.47 0 012.27 1.28 10.08 10.08 0 01.88 1.54l.66 1.3 2.63 5.18 5.27 10.37 10.54 20.74 21.1 41.47.33.64-.3.66q-16.78 37.05-31.9 74.86c-10 25.2-19.59 50.61-27.36 76.54-1 3.24-1.87 6.5-2.79 9.76-.45 1.62-.85 3.26-1.28 4.9s-.85 3.25-1.26 4.91a160.89 160.89 0 00-3.61 19.83l-.23 2.51-.16 2.47-.07 2.53c.06.79.06 1.58.14 2.37a33 33 0 002.68 9.33 70.3 70.3 0 004.69 8.76c1.82 2.81 3.72 5.56 5.79 8.21a182 182 0 0013.26 15.22c4.67 4.87 9.55 9.55 14.54 14.1 10 9.1 20.48 17.7 31.21 25.95a683.64 683.64 0 0067.27 45.53 372.66 372.66 0 0035.83 18.94c3.08 1.37 6.18 2.67 9.33 3.8a52.13 52.13 0 009.5 2.62 9.78 9.78 0 004.29-.11 11.79 11.79 0 003.63-2.61 60.27 60.27 0 006.39-7.57c4-5.41 7.54-11.15 11-17s6.78-11.71 10-17.65c6.48-11.9 12.67-24 18.71-36.11s11.91-24.37 17.7-36.64 11.5-24.58 17.05-36.95l.43-1 1 .11c14.54 1.52 29.17 3 43.62 1.58a75.85 75.85 0 0021-5 51.6 51.6 0 009.57-5 58.66 58.66 0 008.33-6.91 74.71 74.71 0 007.09-8.2c1.05-1.49 2.15-2.92 3.12-4.46l1.48-2.27 1.4-2.34c1.86-3.11 3.55-6.33 5.19-9.57.81-1.62 1.57-3.27 2.36-4.91a10.63 10.63 0 001.08-4.63c-.06-3.15-2-6.1-4.46-8.51a41.13 41.13 0 00-8.55-6.08 99.36 99.36 0 00-20-8.14h.94a129 129 0 01-48 7.6 193.66 193.66 0 01-48-7.62 292.86 292.86 0 01-45.37-17.22A379 379 0 01248.81 426q-10.22-6.54-20-13.67c-6.53-4.78-12.92-9.74-19.05-15.07q-2.29-2-4.52-4.12a52.82 52.82 0 01-4.3-4.51 13.34 13.34 0 01-1-1.38 4.84 4.84 0 01-.5-1 3.54 3.54 0 01-.11-.44 2.57 2.57 0 010-.73 1.89 1.89 0 011.44-1.49 3.07 3.07 0 011.57.1c.32.1.61.21.88.32.53.23 1 .47 1.49.72.94.49 1.83 1 2.7 1.56l1.3.82 1.27.74 2.53 1.49 2.65 1.3 1.32.65 1.36.55 2.74 1.12a83.65 83.65 0 0011.38 3.26 118 118 0 0023.67 2.52 185.54 185.54 0 0023.9-1.26c7.95-.89 15.86-2.21 23.69-3.86s15.64-3.62 23.22-6l.88-.27.63.64a54.06 54.06 0 0017.26 11.65 77.48 77.48 0 0020.36 5.36c14.08 1.75 28.46.62 42.51-1.78a275.8 275.8 0 0041.48-10.8c6.79-2.29 13.49-4.83 20.12-7.53s13.19-5.6 19.59-8.76l-.24.2a67.72 67.72 0 006.73-11.85 78.39 78.39 0 004.49-12.92 68.84 68.84 0 001.38-27.11c-2.72-18.08-13-34.45-26.11-46.8a49.06 49.06 0 00-11.28-7.27 46.5 46.5 0 00-12.95-3.38 53.18 53.18 0 00-13.45.4 70.07 70.07 0 00-13.14 3.31 117.6 117.6 0 00-24.41 12.1 161.1 161.1 0 00-21.73 16.55l-7.33 6.71 5-8.57a30.79 30.79 0 003.77-10.37 35.68 35.68 0 00.1-11.11 62.87 62.87 0 00-7.62-21.26 128.56 128.56 0 00-13-19 199.1 199.1 0 00-15.61-17q-4.12-4-8.47-7.86c-.36-.33-.71-.61-1.09-1l-1.1-1.11a17 17 0 01-2-2.39c-.15-.21-.32-.41-.46-.63l-.39-.67-.76-1.36c-.49-.91-.83-1.89-1.24-2.83a34.06 34.06 0 01-1.7-12 61.84 61.84 0 011.48-11.79 124.92 124.92 0 017.41-22.3A190 190 0 01346.18 134l-.16 1.07-10.81-44.25-.66-2.69 2.6.93q9.84 3.48 19.75 6.72l5 1.6a7.81 7.81 0 004.12.16 7.89 7.89 0 005.69-5.28l.15-.47.07-.49.09-.48v-1.98l-.09-.63-.79-5.12-1.64-10.24c-1.15-6.81-2.4-13.6-3.86-20.34a176.63 176.63 0 00-5.36-19.89 77.09 77.09 0 00-3.87-9.43 32.75 32.75 0 00-5.62-8.19 12.79 12.79 0 00-3.73-2.73 7.7 7.7 0 00-4.27-.67c-2.94.42-5.68 2.36-8.05 4.72a160.41 160.41 0 00-13.63 15.49c-8.57 10.87-16.52 22.26-24.3 33.75s-15.31 23.14-22.73 34.88-14.7 23.57-21.95 35.43l-10.78 17.83-5.35 8.94z" />
      <Path
        d="M495.34 360.43s-6.49-2.66-27.32 6.76-9.37 19.4-43.36 17-66.58-.12-75.69-3.59-18.22-10.12-26-11.55c-11.93-2.18-19.37 7.54-42.24 10.68s-35.07 1.94-46.43-2.55-14.93-9.38-30.54-8.48-17.68 11.68-32.86 4.86S154.68 360 154.68 360s-.42 13.65 3 20.27 8.5 13.36 17.49 18 20.27 5.46 22 7.32a130.79 130.79 0 0110.29 13.83c2.34 3.94 2.09 13.36 15.86 20.79s44.69 21.61 49.23 22.06 92 26.11 93.95 30.69 90.59 3.86 92.46.68c1.76-3 5.82-16.8-5.17-18.22s-12-6.25-16.78-6-32.55 3.37-38.72 4.45-12.05.7-23.15.43-20.73-1.89-28.55-4.69-28.47-12.61-30.92-13.21-22.25-8.16-33.36-11.39-13.81-4.39-20-7-38-28.29-38-28.29-14.31-9.19-16.8-12.72-9.76-9.68-8.46-10.36 28.38 7.26 31.59 9.41 46.61 3.32 46.61 3.32 22-5.67 26.38-6.26 18.08-4.7 18.73-4.63c4.51.52 13 6.69 24.81 10.4s17 6 24.93 4.83a211.58 211.58 0 0128.7-1.35c4.85.27 33.2-5.72 36.24-6.52 11.52-3 38.27-13.94 38.27-13.94s8.6-4.92 8.75-4.94c3.89-.46 8.06-7.53 8.63-8.55s2.65-7.98 2.65-7.98z"
        fill="#ca2028"
      />
      <Path
        d="M460.33 311.14l-14.88 19.29c-13 3.39-27.22-11.23-29.23-23.17h0a22.08 22.08 0 0118-25.36l20.78-3.49a22.07 22.07 0 0125.36 18h0c8 15.52 17.33 32.46-20.03 14.73z"
        stroke="#231f20"
        strokeMiterlimit={10}
      />
      <Path
        d="M246.43 416.47s58.13 46.69 45.79 74.32-110.73 77.65-100 95.38c28.27 46.89 115.75-19.75 115.75-19.75s46.55-61.4 30.86-96.85-92.4-53.1-92.4-53.1z"
        fill="#ee4b8f"
      />
      <Path
        d="M246.43 416.47c5.89 4.77 11.52 9.87 16.94 15.18a191 191 0 0115.32 16.84 92.78 92.78 0 0112.23 19.24 41.51 41.51 0 013.32 11 22.82 22.82 0 01-1.13 11.48 35.1 35.1 0 01-6.29 9.67 98.18 98.18 0 01-8 8.18c-5.6 5.16-11.53 9.93-17.53 14.58-12 9.3-24.4 18.06-36.51 27.15-6.05 4.55-12.05 9.18-17.74 14.13a107.15 107.15 0 00-8.15 7.78 48.2 48.2 0 00-3.55 4.3 19.37 19.37 0 00-2.58 4.73 5.8 5.8 0 00.13 4.77c.44.74 1 1.55 1.48 2.31s1.08 1.5 1.68 2.2a31.21 31.21 0 008.32 7.17 32.8 32.8 0 0010.3 3.86 45.64 45.64 0 0011.08.82 84.78 84.78 0 0022-4.22 158 158 0 0020.94-8.49c6.79-3.28 13.4-6.95 19.86-10.87s12.78-8.11 18.83-12.59l-.18.18a236.8 236.8 0 0014.57-22.41 198.11 198.11 0 0011.82-24 106.84 106.84 0 007.16-25.6 55.19 55.19 0 00.23-13.22 36.8 36.8 0 00-3.65-12.59c-4-7.88-10.55-14.25-17.6-19.61a143.18 143.18 0 00-22.91-13.77 239.08 239.08 0 00-24.73-10.36c-8.43-2.98-16.98-5.66-25.66-7.84zm0 0c8.71 2 17.31 4.6 25.79 7.49a240.87 240.87 0 0124.95 10 137.18 137.18 0 0123.23 13.6 78.11 78.11 0 0110.16 8.91 48.93 48.93 0 018 11 38.19 38.19 0 013.88 13 57.11 57.11 0 01-.13 13.58 106 106 0 01-7.12 26 196.52 196.52 0 01-11.86 24.21A238.12 238.12 0 01308.66 567l-.07.1-.1.08c-6.13 4.56-12.47 8.75-19 12.73s-13.15 7.68-20 11a159 159 0 01-21.17 8.64 85.38 85.38 0 01-22.54 4.29 47.74 47.74 0 01-11.55-.88 35.13 35.13 0 01-10.88-4.12 33.14 33.14 0 01-8.81-7.62c-.63-.74-1.17-1.55-1.76-2.32s-1-1.59-1.58-2.48a6.6 6.6 0 01-.8-3.17 9.56 9.56 0 01.55-3.09 21 21 0 012.85-5.21 47.06 47.06 0 013.7-4.46 106.82 106.82 0 018.31-7.91c5.76-5 11.79-9.62 17.87-14.17 12.15-9.1 24.57-17.8 36.62-27 6-4.6 12-9.31 17.54-14.38a98.61 98.61 0 008-8 34.13 34.13 0 006.13-9.26 21.54 21.54 0 001.15-10.89 40.34 40.34 0 00-3.12-10.74 93.38 93.38 0 00-11.84-19.22 189.51 189.51 0 00-15-17c-5.37-5.41-10.91-10.59-16.73-15.45zM321.14 400.93c-.12 1.21-.13 2.2-1.09 2.1a2.25 2.25 0 01.43-4.38c.97.09.78 1.07.66 2.28zM375.46 415.81c-.12 1.21-.13 2.2-1.1 2.1a2.26 2.26 0 01.44-4.38c.97.09.78 1.07.66 2.28zM365.68 429c-.12 1.21-.71 3.66-1.68 3.56s-1.07-2.61-.95-3.82a2 2 0 012-2c.95.05.75 1.03.63 2.26zM473.17 391.36l.49 3.07s2 .49 2.1-.76l.23-2.3-1.48-2.92z"
        fill="#231f20"
      />
      <Circle cx={233.17} cy={271.42} r={40.3} fill="#231f20" />
      <Circle cx={233.87} cy={278.01} r={46.79} fill="#231f20" opacity={0.49} />
      <Circle cx={322.43} cy={251.18} r={28.9} fill="#231f20" />
      <Circle cx={392.97} cy={317.17} r={2.31} fill="#231f20" />
      <Circle cx={391.87} cy={333.08} r={2.31} fill="#231f20" />
      <Circle cx={324.67} cy={257.26} r={31.72} fill="#231f20" opacity={0.49} />
      <Circle cx={243.11} cy={269.54} r={22.92} fill="#fff" />
      <Circle cx={320.52} cy={249.63} r={18.85} fill="#fff" />
      <Circle cx={252.42} cy={274.05} r={8.6} fill="#231f20" />
      <Circle cx={319.81} cy={256.78} r={7.18} fill="#231f20" />
      <Path
        d="M151.83 263.89S178.4 153.08 201 170.48s75.17 75.57 70.74 78.85-54.06-42.79-70.55-33-49.36 47.56-49.36 47.56z"
        fill="#006838"
      />
      <Path
        d="M151.83 263.89c3.63-14.95 7.82-29.77 12.7-44.37 2.47-7.29 5.14-14.52 8.17-21.6 1.52-3.54 3.13-7 4.9-10.47a84.64 84.64 0 015.93-9.94 40.48 40.48 0 013.68-4.49 18.87 18.87 0 014.61-3.62 10.17 10.17 0 012.8-1 7.82 7.82 0 013 .06c2 .4 3.62 1.75 5.09 2.93 6 4.84 11.63 10.12 17.17 15.47q16.53 16.11 31.8 33.47c5.06 5.8 10 11.69 14.67 17.86 1.16 1.54 2.28 3.11 3.34 4.73.53.82 1.05 1.64 1.52 2.5a10.56 10.56 0 011.15 2.79 1.82 1.82 0 010 .92 1 1 0 01-.31.5 1.38 1.38 0 01-.5.25 3.24 3.24 0 01-1.65-.19 16.08 16.08 0 01-2.69-1.24c-1.7-.94-3.33-2-4.94-3-12.78-8.57-25-18-38.74-24.94a59 59 0 00-10.64-4.25 23.89 23.89 0 00-5.61-.91 11.09 11.09 0 00-5.46 1.07 70.3 70.3 0 00-9.28 6.71c-1.5 1.21-2.94 2.48-4.37 3.76s-2.85 2.58-4.26 3.88c-5.65 5.23-11.08 10.64-16.41 16.23s-10.56 11.14-15.67 16.89zm0 0q7.57-8.7 15.49-17.11c5.28-5.6 10.65-11.11 16.23-16.41 1.41-1.32 2.8-2.64 4.25-3.91s2.88-2.57 4.37-3.78a71 71 0 019.37-6.82 11.75 11.75 0 015.73-1.15 24.81 24.81 0 015.76.91 59.16 59.16 0 0110.77 4.26c13.81 7 26.13 16.34 38.91 24.83 1.6 1 3.22 2.08 4.89 3a15.64 15.64 0 002.54 1.17 2.62 2.62 0 001.18.16c.13-.06.17-.05.19-.17a1.06 1.06 0 000-.5 9.3 9.3 0 00-1.06-2.51c-.46-.83-1-1.63-1.49-2.43-1.05-1.6-2.17-3.15-3.32-4.68-4.63-6.12-9.62-12-14.69-17.75q-15.19-17.34-31.63-33.54c-5.51-5.36-11.1-10.65-17.05-15.48-1.5-1.21-3-2.44-4.79-2.8a7.62 7.62 0 00-5.33.86 18 18 0 00-4.44 3.46 40.51 40.51 0 00-3.63 4.41 82.25 82.25 0 00-5.92 9.84c-1.78 3.4-3.39 6.89-4.92 10.41-3 7-5.73 14.26-8.24 21.53-5 14.52-9.38 29.31-13.17 44.2z"
        fill="#231f20"
      />
      <Path
        d="M392.71 258.11s-23-102.74-44.07-83.51-61.25 65.27-56.56 68.17 37.4-37.74 54.65-29.3 45.98 44.64 45.98 44.64z"
        fill="#006838"
      />
      <Path
        d="M392.71 258.11q-4.66-19.56-10.9-38.68c-2.08-6.36-4.3-12.68-6.83-18.88a116.89 116.89 0 00-8.88-17.94 33.07 33.07 0 00-6.33-7.62 11 11 0 00-4.25-2.26 6.62 6.62 0 00-4.61.69 20.08 20.08 0 00-3.8 3.11c-1.22 1.15-2.42 2.31-3.62 3.48q-3.58 3.51-7.08 7.12-14 14.43-26.88 29.84c-4.29 5.13-8.53 10.33-12.4 15.77-1 1.36-1.89 2.74-2.76 4.16a18.63 18.63 0 00-2.13 4.38 1.8 1.8 0 00-.05 1c.06.17.27.26.61.23a5.94 5.94 0 002.12-.9 38.68 38.68 0 004-2.9c5.2-4.2 10.18-8.7 15.44-12.87s10.7-8.19 16.81-11.09A25.61 25.61 0 01341 212a12.64 12.64 0 015.05.81 16.08 16.08 0 012.26 1.17c.73.42 1.49.81 2.2 1.26A109.07 109.07 0 01366 228.11a336.75 336.75 0 0126.71 30zm0 0a336.66 336.66 0 00-27.1-29.65 110 110 0 00-15.47-12.71c-.7-.44-1.44-.82-2.16-1.23a16.33 16.33 0 00-2.2-1.13 12.08 12.08 0 00-4.81-.75 25 25 0 00-9.48 2.67c-6 2.89-11.41 6.91-16.63 11.08s-10.17 8.68-15.39 12.93a40 40 0 01-4.11 3 6.66 6.66 0 01-2.48 1 1.66 1.66 0 01-.81-.1 1.15 1.15 0 01-.68-.65 2.59 2.59 0 010-1.51 19.67 19.67 0 012.22-4.64 85.3 85.3 0 012.78-4.22c3.88-5.5 8.1-10.72 12.39-15.88q13-15.37 27.05-29.78 3.51-3.6 7.12-7.11c1.21-1.16 2.42-2.32 3.65-3.47l1.85-1.7 1-.82c.37-.23.72-.48 1.11-.69a7.4 7.4 0 015.12-.74 11.57 11.57 0 014.53 2.43 33.48 33.48 0 016.45 7.8 117.77 117.77 0 018.86 18.08c2.5 6.23 4.71 12.56 6.76 18.95q6.03 19.19 10.43 38.84z"
        fill="#231f20"
      />
      <Circle cx={392.57} cy={325.96} r={4.16} fill="#231f20" />
      <Circle cx={383.68} cy={327.63} r={2.31} fill="#231f20" />
      <Circle cx={383.29} cy={336.42} r={4.16} fill="#231f20" />
      <Path
        d="M224.54 556.57c4.44-2.79 5.08-10.51.45-8-8.18 4.37-23.13 12.37-28.8 19.89-7.36 9.77-15.79 21-21.31 22.86s-7 12-15 7.83-43.88-16.51-42.15-10.6 3.23 8.31 11 8.28 15.09.92 15.79 4.08-13 11.59-9.17 16.7 13.81 7.06 15.85 3.55 7.89-9.44 17.86-12.71c9.61-3.14 10.77.39 18.19 3.82s9.76 8.37 23.65 5.23 24-6 33.91-10.94 14.48-10.84 20.55-17.66 28.71-10.66 18.41-17.41-38.34-15.55-49.16-11.9-21.54 2.94-11.59-2.15q.82-.44 1.52-.87zM113.29 587.7c-.28 2.79-5.78-.66-11.3-1.2s-10.06-.26-9.79-3 5-4.61 10.49-4.07 10.87 5.48 10.6 8.27zM92.16 589.64c1.59 2.31-1.86 1.19-3.59 2.38s-2.71 2.76-4.3.46 6.3-5.14 7.89-2.84z"
        fill="#26a9e0"
        opacity={0.71}
      />
    </Svg>
  );
};
