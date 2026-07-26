import { WLOCH } from "../WLOCH/WLOCH.js";

export function GATE_WLOCH(route) {
  return WLOCH.stabilise({
    gate: route,
    axis: "ODD-SPRUNG",
    stable: true
  });
}

