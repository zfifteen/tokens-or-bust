/** Chart series colors — keep in lockstep with @theme in styles.css. */
export const ink = "#e8eadc";
export const muted = "#9aa186";
export const faint = "#6d7360";
export const green = "#7cb389";
export const amber = "#c4a35a";
export const red = "#d45d4a";
export const blue = "#7aa0b4";
export const grid = "#262b1e";
export const edge = "#3a4030";
export const ax = "#141914";
export const canvas = "#0c0f0c";
export const panel = "#161b14";

export const seriesColor = {
  a: green,
  b: amber,
  c: red,
  volume: blue,
  flagship: green,
  mid: amber,
  cheap: red,
  capex: amber,
  ocf: blue,
  fcf: red,
} as const;
