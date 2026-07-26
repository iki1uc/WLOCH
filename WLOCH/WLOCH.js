export const WLOCH = {
  id: "WLOCH-ANCHOR",
  type: "stabilisation-axis",
  version: "1.0.0",

  anchor() {
    return {
      status: "ANCHOR-SET",
      route: "WLOCH-ROUTE",
      gate: "WLOCH-GATE",
      stable: true
    };
  },

  stabilise(link) {
    return {
      input: link,
      output: {
        ...link,
        wloch: "STABLE",
        vibration: "REDUCED",
        direction: "LOCKED"
      }
    };
  },

  injectHead() {
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --wloch-stable: 1;
        --wloch-route: "WLOCH-ROUTE";
      }
    `;
    document.head.appendChild(style);
    return "WLOCH-HEAD-INJECTED";
  }
};
