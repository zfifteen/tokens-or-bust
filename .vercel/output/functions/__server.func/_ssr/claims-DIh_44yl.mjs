import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./router-NoGyaqkl.mjs";
import { n as DANGER, r as DISCLAIMER, t as CLAIMS } from "./hypotheses-Bxek84gB.mjs";
import { t as Tag } from "./Tag-BKsvpXw7.mjs";
import { r as cashRows, t as asOf, u as mag7 } from "./measured-1hSTm6Su.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/claims-DIh_44yl.js
var import_jsx_runtime = require_jsx_runtime();
function LoopDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 220",
		className: "h-auto w-full",
		role: "img",
		"aria-label": "The conversion-rate loop: hub equity funds capex, silicon sells tokens and rental, cash is supposed to retire the paper.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "320",
				height: "220",
				fill: "transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "110",
				r: "78",
				fill: "none",
				stroke: "currentColor",
				className: "text-hair",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "160",
				cy: "110",
				r: "78",
				fill: "none",
				stroke: "currentColor",
				className: "text-brass/40",
				strokeWidth: "1",
				strokeDasharray: "4 6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopNode, {
				x: 160,
				y: 28,
				label: "Hub equity",
				sub: "NVDA mark"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopNode, {
				x: 258,
				y: 110,
				label: "Capex",
				sub: "chips + sites"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopNode, {
				x: 160,
				y: 192,
				label: "Tokens / rental",
				sub: "the cash print",
				accent: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopNode, {
				x: 62,
				y: 110,
				label: "Paper",
				sub: "$105B cap"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "160",
				y: "108",
				textAnchor: "middle",
				className: "fill-brass",
				fontFamily: "IBM Plex Mono, ui-monospace, monospace",
				fontSize: "10",
				letterSpacing: "0.12em",
				children: "H5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "160",
				y: "122",
				textAnchor: "middle",
				className: "fill-mute",
				fontFamily: "IBM Plex Sans, sans-serif",
				fontSize: "10",
				children: "conversion rate"
			})
		]
	});
}
function LoopNode({ x, y, label, sub, accent }) {
	const w = 92;
	const h = 36;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${x - w / 2}, ${y - h / 2})`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: w,
				height: h,
				rx: "8",
				className: accent ? "fill-panel stroke-brass" : "fill-panel stroke-hair",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: w / 2,
				y: "15",
				textAnchor: "middle",
				className: "fill-ink",
				fontFamily: "IBM Plex Sans, sans-serif",
				fontSize: "11",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: w / 2,
				y: "27",
				textAnchor: "middle",
				className: "fill-faint",
				fontFamily: "IBM Plex Mono, ui-monospace, monospace",
				fontSize: "9",
				children: sub
			})
		]
	});
}
var STATUS_TAG = {
	live: "measured",
	open: "hypothesis",
	fail: "mixed",
	unscored: "unscored"
};
function Claims() {
	const mag = mag7.reduce((s, r) => s + r.weight, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-8 pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.14em] text-brass",
				children: "Standing claims"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-[1.85rem] text-ink",
				children: "The loop"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mute",
				children: "Hub equity funds silicon. Silicon sells tokens and GPU-hours. That conversion rate is supposed to retire the paper. The clocks do not match."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 rounded-xl bg-panel px-3 py-3 shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopDiagram, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-xl bg-panel px-4 py-3 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.1em] text-faint",
						children: ["Danger level · ", asOf]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-display text-2xl text-ink",
						children: [
							DANGER.level,
							" · ",
							DANGER.label
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-mute",
						children: DANGER.why
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-3",
				children: CLAIMS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-panel px-4 py-4 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] uppercase tracking-[0.1em] text-brass",
								children: c.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
								kind: STATUS_TAG[c.status],
								children: c.statusLabel
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-xl text-ink",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink",
							children: c.claim
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: c.now
						})
					]
				}, c.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-xl text-ink",
				children: "Ten-number panel, condensed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-3 divide-y divide-hair rounded-xl bg-panel shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "Mag7 in SPY",
						v: `${mag.toFixed(1)}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "Four-name capex / OCF",
						v: "0.95"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "AMZN TTM FCF",
						v: "−$7.6B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "NVDA data-center YoY",
						v: "+117%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "NVDA residual-value cap",
						v: "$105B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "H100 neocloud / hyperscaler",
						v: "$3.71 / $10.53"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "Luna input after 7/30",
						v: "$0.20 / 1M"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "CY2026 capex guides",
						v: "3 up / 0 down"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "CoreWeave vs 52-week high",
						v: "−42%"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRow, {
						k: "RSP vs SPY, 3-month",
						v: "+4.48 / +0.99"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs text-faint",
				children: [
					"Cash rows use company periods",
					cashRows.map((r) => ` · ${r.name} ${r.period}`).join(""),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/figures",
				className: cn("mt-6 flex min-h-12 items-center justify-center rounded-xl bg-ink text-sm font-medium text-canvas"),
				children: "Open the figures"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-faint",
				children: DISCLAIMER
			})
		]
	});
}
function PanelRow({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex min-h-12 items-center justify-between gap-3 px-4 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-mute",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular font-mono text-ink",
			children: v
		})]
	});
}
//#endregion
export { Claims as component };
