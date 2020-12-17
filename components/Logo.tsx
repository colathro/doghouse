import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

export const Logo: React.FC = () => {
  return (
    <Svg width={250} height={62} data-name="Layer 1" viewBox="0 0 250 62">
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h250.33v62.48H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)" fill="#1a1818">
        <Path d="M17.89 0H28v49.16H17.74V45h-.16q-3.42 5.3-7.62 5.29a8.25 8.25 0 01-7.16-4.7A24.61 24.61 0 010 33.14a24 24 0 012.8-12.45A8.38 8.38 0 0110.11 16q4.2 0 7.63 4.82zm0 33q0-7.93-3.89-7.93t-4 8.38a13 13 0 001 5.76 3.29 3.29 0 003 2 3.11 3.11 0 002.8-2.18 15 15 0 001.09-6.22M84.79 49.32v-4.51c-2 2.9-4.31 4.35-7 4.35a9.18 9.18 0 01-8.09-4.35q-2.81-4.37-2.8-12.29a22.63 22.63 0 012.8-12.14 8.57 8.57 0 0114.94 0h.15v-3.26H94.9v29.71a20.69 20.69 0 01-1.4 7.78 11.32 11.32 0 01-5.13 5.76 15.89 15.89 0 01-8.09 2A15.62 15.62 0 0172 60.06a11.36 11.36 0 01-5-7.78h9a4.52 4.52 0 004 2.49 4.37 4.37 0 003.42-1.56 5.61 5.61 0 001.4-3.89m0-16.8q0-7.79-3.89-7.78a3.42 3.42 0 00-3.11 1.87 10.2 10.2 0 00-1.12 5.29q0 8.87 4 8.86t4-8.09M102.53 0h10.11v21.32h.16q3.74-5.14 8.55-5.14a6.71 6.71 0 015.45 2.33 9.66 9.66 0 011.87 6.38v24.27h-10v-19.6a5.09 5.09 0 00-.78-3 2.34 2.34 0 00-2-1.09q-3.12 0-3.12 4.36v19.33h-10.24z" />
        <Path d="M148.58 5.13c.47 0 1.4 10.89 1.87 10.89h.62a13.87 13.87 0 013.42.94c.47.16 6.07-8.4 6.54-8.25s-4.2 9.49-3.74 10l1.71 1.67.78 1.09c.31.47 10.27-4.82 9.8-4.36s-8.4 7-8.24 7.63a21.45 21.45 0 01.77 3.26c0 .47 8.72.16 10.12.47s-9.8 1.87-9.65 2.34a9.84 9.84 0 010 2.17v1.25c0 .31 7.47 1.4 8.87 2s-9 .78-9.18 1.25a19.83 19.83 0 01-.62 3c-.16.63 5.91 4.67 7.16 5.45s-8.25-2.8-8.56-2.34l-1.4 1.87-.31.47c-.47.47 3.42 7 4.2 8.09s-6.53-6.22-7-5.91a11.42 11.42 0 01-5.44 1.71c-.47 0-1.56 7.31-1.72 7.78s-1.55-7.78-1.86-7.78a11.77 11.77 0 01-4.36-1.09c-.62-.31-5.44 4.82-6.22 5.13s3.73-7 3.27-7.46l-1.1-1.1a14.58 14.58 0 01-1.71-2.48c-.31-.47-7.93 2.33-8.87 2.33s7.78-4.67 7.63-5.45a20.78 20.78 0 01-.62-3.42c0-.62-8.87-.31-8.87-.93s8.87-1.56 8.87-1.87v-1.12c0-.31.15-1.87.15-2.8s-9.8-4.2-9-4.2 9.8.78 10 .16a15.7 15.7 0 012.48-4.83l.47-.62c.47-.62-5.91-9.49-5.29-10s8.09 7.46 8.71 7.15a12.89 12.89 0 013.58-1.09h1.09c.62 0 1.4-10.89 1.87-10.89m-.16 36.1a3.26 3.26 0 003-1.87 14.26 14.26 0 00.93-6.37 14 14 0 00-.93-6.23 3.12 3.12 0 00-3-1.71 3.25 3.25 0 00-3 1.71 13.7 13.7 0 00-1.09 6.38c0 5.4 1.29 8.09 3.89 8.09" />
        <Path d="M168.5 17.11h10.11v20.7a4.52 4.52 0 00.78 2.64 2.32 2.32 0 002 1.09q3 0 3-4.35V17.11h10.11v18.67q0 7.17-3.27 10.9a12.12 12.12 0 01-9.64 3.73q-7 0-10.12-3.89a14.82 14.82 0 01-3.11-9.65zM200.55 38.9Q205.68 42 208 42a3.33 3.33 0 002-.62 1.88 1.88 0 00.78-1.56 1.57 1.57 0 00-.63-1.4l-5.13-2.65a12.61 12.61 0 01-5.29-3.73 8.88 8.88 0 01-1.56-5.44 10.12 10.12 0 013.31-7.6 11.51 11.51 0 018.09-3q4.83 0 11.83 3.89l-3.89 7.15a15.47 15.47 0 00-7.47-2.8c-1.66 0-2.49.68-2.49 2a2 2 0 00.93 1.71 13 13 0 003.42 1.55 16.49 16.49 0 016.69 3.89 7.92 7.92 0 012 5.6 10.61 10.61 0 01-3.27 8.09 11.6 11.6 0 01-8.4 3.11 22.61 22.61 0 01-11.82-3.89zM240.84 39.36h8.56q-2.49 10.89-12.29 10.89a11.5 11.5 0 01-9.65-4.66q-3.57-4.67-3.57-12.76a19.46 19.46 0 013.57-12.29 11.36 11.36 0 019.54-4.67 12.16 12.16 0 016.85 2.18 12.69 12.69 0 014.77 5.95 34.82 34.82 0 011.71 11.51h-17q.16 7.16 4 7.16a3.27 3.27 0 002.33-.94A4 4 0 00241 39.2m-7.31-9.33H241a12.16 12.16 0 00-.94-5 2.8 2.8 0 00-2.64-1.56 3.12 3.12 0 00-3 1.56 10.9 10.9 0 00-.93 5.13M49.48 6.69c.46 0 1.4 10.89 1.86 10.89H52a13.62 13.62 0 013.43.93c.46.16 6.07-8.4 6.53-8.24s-4.2 9.49-3.73 10l1.71 1.72.74 1.01c.31.46 10.26-4.83 9.8-4.36s-8.4 7-8.25 7.62a20.47 20.47 0 01.77 3.3c.15.47 8.71.16 10.11.47s-9.8 1.86-9.65 2.49a9.84 9.84 0 010 2.17v1.25c0 .31 7.47 1.4 8.87 2s-9 .78-9.18 1.25a19.57 19.57 0 01-.62 2.95c-.15.63 5.91 4.67 7.16 5.45s-8.25-2.8-8.56-2.34l-1.4 1.87-.31.47c-.47.47 3.42 7 4.2 8.09s-6.53-6.22-7-5.91a11.42 11.42 0 01-5.44 1.71c-.47 0-1.56 7.31-1.71 7.78s-1.56-7.78-1.87-7.78a11.67 11.67 0 01-4.35-1.09c-.63-.31-5.45 4.82-6.23 5.13s3.74-7 3.27-7.46L39.21 47a14.1 14.1 0 01-1.71-2.5c-.32-.47-7.94 2.33-8.87 2.33s7.62-5.29 7.47-5.91a21.91 21.91 0 01-.63-3.42c0-.62-8.86-.31-8.86-.93s8.86-1.57 8.86-1.87v-1.09c0-.32.16-1.87.16-2.8s-9.8-4.2-9-4.2 9.8.77 10 .15a15.75 15.75 0 012.34-4.51l.46-.62c.47-.62-5.91-9.49-5.29-10s8.09 7.47 8.72 7.16a12.41 12.41 0 013.57-1.09h1.09c.63 0 1.4-10.89 1.87-10.89M49.17 43a3.27 3.27 0 002.95-1.87 14.32 14.32 0 00.93-6.38 13.91 13.91 0 00-.93-6.22 3.12 3.12 0 00-3-1.71 3.26 3.26 0 00-2.95 1.71 13.7 13.7 0 00-1.09 6.38q0 8.09 3.89 8.09" />
      </G>
    </Svg>
  );
};
