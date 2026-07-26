import { NCLinkFullSync } from "../NCLinkFullSync.js";

export function GATE_LINK(gateValue) {
  return NCLinkFullSync({
    gate: gateValue,
    route: "ODD-SPRUNG",
    sync: true
  });
}
