import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { i as RotateCcw, r as Share2 } from "../_libs/lucide-react.mjs";
import { i as money, r as cn } from "./router-NoGyaqkl.mjs";
import { t as Tag } from "./Tag-BKsvpXw7.mjs";
import { t as Button } from "./button-jjQKrS3Q.mjs";
import { a as sharePayload, i as knobsToSearch, n as computePaths, o as useKnobs, r as knobsFromSearch, t as FigureChart } from "./share-CRgkIZyc.mjs";
import { n as FIGURES } from "./figures-CSTAcF3l.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/play-B5OcYB9K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex w-full touch-none select-none items-center", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-track",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-brass" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-5 rounded-full bg-ink shadow-[var(--shadow-border)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass" })]
	});
}
function KnobRow({ label, value, display, min, max, step, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-sm text-mute",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular font-mono text-sm text-ink",
				children: display
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			min,
			max,
			step,
			value: [value],
			onValueChange: (v) => onChange(v[0] ?? value)
		})]
	});
}
var PLAY_FIGS = [
	{
		id: "01",
		chip: "01 Peak"
	},
	{
		id: "05",
		chip: "05 P&L"
	},
	{
		id: "06",
		chip: "06 GPU-h"
	},
	{
		id: "07",
		chip: "07 Mix"
	},
	{
		id: "02",
		chip: "02 Regime"
	},
	{
		id: "04",
		chip: "04 Break-even"
	}
];
function Play() {
	const { knobs, setKnob, setKnobs, reset } = useKnobs();
	const [fig, setFig] = (0, import_react.useState)("01");
	const [toast, setToast] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const fromUrl = knobsFromSearch(new URLSearchParams(window.location.search));
		if (Object.keys(fromUrl).length) setKnobs(fromUrl);
		setReady(true);
	}, [setKnobs]);
	const { C } = (0, import_react.useMemo)(() => computePaths(knobs), [knobs]);
	const last = C[C.length - 1];
	const meta = FIGURES.find((f) => f.id === fig);
	async function share() {
		const url = `${window.location.origin}/play?${knobsToSearch(knobs)}`;
		const result = await sharePayload("Conversion Rate — identity sketch", "Interactive Profit = (P − Cv) · V − F", url);
		if (result === "copied") setToast("Link copied");
		if (result === "shared") setToast("Shared");
		window.setTimeout(() => setToast(null), 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.14em] text-brass",
				children: "Identity sketch"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-[1.85rem] text-ink",
				children: "Play the knobs"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mute",
				children: "The first seven figures are a teaching sketch. Change F, price, and volume. The charts recompute. This is Hypothesis, not a company."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				children: PLAY_FIGS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFig(item.id),
					className: cn("h-10 shrink-0 rounded-lg px-3 font-mono text-xs", fig === item.id ? "bg-ink text-canvas" : "bg-panel text-mute shadow-[var(--shadow-border)]"),
					children: item.chip
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { kind: "hypothesis" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: "H5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl text-ink",
						children: meta?.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-mute",
						children: meta?.lede
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureChart, { id: fig })
					}),
					last && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-mono text-[11px] text-faint",
						children: [
							"Path C · month ",
							knobs.months - 1,
							" · rev ",
							money(last.rev),
							" · profit ",
							money(last.profit)
						]
					})
				]
			}),
			ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-5 rounded-xl bg-panel px-4 py-4 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnobRow, {
						label: "Fixed cost F",
						value: knobs.F,
						display: `${money(knobs.F)} / mo`,
						min: 200,
						max: 2e3,
						step: 50,
						onChange: (v) => setKnob("F", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnobRow, {
						label: "Starting P",
						value: knobs.p0,
						display: `$${knobs.p0.toFixed(2)} / MTok`,
						min: .5,
						max: 10,
						step: .1,
						onChange: (v) => setKnob("p0", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnobRow, {
						label: "Path C variable cost",
						value: knobs.cvC,
						display: `$${knobs.cvC.toFixed(2)} / MTok`,
						min: .2,
						max: 3,
						step: .05,
						onChange: (v) => setKnob("cvC", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnobRow, {
						label: "Price monthly multiplier",
						value: knobs.pMulC,
						display: `${(knobs.pMulC * 100).toFixed(0)}% of last month`,
						min: .8,
						max: .99,
						step: .01,
						onChange: (v) => setKnob("pMulC", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnobRow, {
						label: "Volume monthly growth",
						value: knobs.vMulC,
						display: `+${((knobs.vMulC - 1) * 100).toFixed(0)}% / mo`,
						min: 1.02,
						max: 1.3,
						step: .01,
						onChange: (v) => setKnob("vMulC", v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KnobRow, {
						label: "Price floor",
						value: knobs.floorC,
						display: `$${knobs.floorC.toFixed(2)}`,
						min: .1,
						max: 2,
						step: .05,
						onChange: (v) => setKnob("floorC", v)
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-72 animate-pulse rounded-xl bg-panel" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex gap-2 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					className: "flex-1",
					onClick: reset,
					disabled: !ready,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Reset sketch"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					className: "flex-1",
					onClick: share,
					disabled: !ready,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), "Share knobs"]
				})]
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "fixed bottom-20 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink px-3 py-1.5 text-xs text-canvas",
				children: toast
			})
		]
	});
}
//#endregion
export { Play as component };
