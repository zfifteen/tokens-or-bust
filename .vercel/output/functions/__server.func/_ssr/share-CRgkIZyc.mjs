import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as tickMoney, r as cn } from "./router-NoGyaqkl.mjs";
import { a as equalWeight, c as h100Rental, d as nvdaGuarantees, f as nvdaHub, i as circularBook, l as julyCuts, m as tokenCards, n as blended, o as gpuRental, p as rimCredit, r as cashRows, s as guideRevisions, u as mag7 } from "./measured-1hSTm6Su.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as XAxis, c as CartesianGrid, d as Cell, f as ResponsiveContainer, i as YAxis, l as ReferenceLine, n as BarChart, o as Area, p as Tooltip, r as LineChart, s as Line, t as AreaChart, u as Bar } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/share-CRgkIZyc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ClientOnly({ children, fallback }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return fallback ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-52 animate-pulse rounded-lg bg-panel",
		"aria-hidden": true
	});
	return children;
}
/** Defaults match research/unwind/plots/generate_suite.py as-of 2026-09-05. */
var DEFAULT_KNOBS = {
	F: 900,
	p0: 4,
	cvA: 1.1,
	cvB: 1.1,
	cvC: 1.3,
	pMulA: .96,
	pMulB: .88,
	pMulC: .85,
	cvMulA: .96,
	cvMulB: .95,
	cvMulC: .97,
	v0: 2e8,
	vMulA: 1.12,
	vMulB: 1.16,
	vMulC: 1.18,
	floorB: .5,
	floorC: .35,
	gpuHours: 12e5,
	cvBe: .9,
	months: 25
};
var useKnobs = create((set) => ({
	knobs: DEFAULT_KNOBS,
	setKnob: (key, value) => set((s) => ({ knobs: {
		...s.knobs,
		[key]: value
	} })),
	setKnobs: (partial) => set((s) => ({ knobs: {
		...s.knobs,
		...partial
	} })),
	reset: () => set({ knobs: DEFAULT_KNOBS })
}));
function knobsFromSearch(search) {
	const out = {};
	const num = (k) => {
		const v = search.get(k);
		if (v == null || v === "") return;
		const n = Number(v);
		if (Number.isFinite(n)) out[k] = n;
	};
	[
		"F",
		"p0",
		"cvC",
		"pMulC",
		"vMulC",
		"floorC",
		"gpuHours",
		"cvBe"
	].forEach(num);
	return out;
}
function knobsToSearch(k) {
	const p = new URLSearchParams();
	p.set("F", String(k.F));
	p.set("p0", String(k.p0));
	p.set("cvC", String(k.cvC));
	p.set("pMulC", String(k.pMulC));
	p.set("vMulC", String(k.vMulC));
	p.set("floorC", String(k.floorC));
	return p.toString();
}
/** Chart series colors — keep in lockstep with @theme in styles.css. */
var ink = "#e8eadc";
var muted = "#9aa186";
var green = "#7cb389";
var amber = "#c4a35a";
var red = "#d45d4a";
var blue = "#7aa0b4";
var grid = "#262b1e";
var edge = "#3a4030";
var tick = {
	fill: muted,
	fontSize: 10,
	fontFamily: "IBM Plex Mono, ui-monospace, monospace"
};
var axisLine = { stroke: edge };
var gridProps = {
	stroke: grid,
	strokeDasharray: "3 4",
	vertical: false
};
var chartMargin = {
	top: 10,
	right: 10,
	left: 2,
	bottom: 4
};
function ChartBox({ children, className, height = 228 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-full overflow-hidden rounded-lg bg-wash shadow-[var(--shadow-border)]", className),
		style: { height },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children
		})
	});
}
function SeriesLegend({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-2 flex flex-wrap gap-x-3 gap-y-1 px-0.5",
		children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-1.5 text-[11px] text-mute",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block size-2 shrink-0 rounded-full",
				style: { backgroundColor: i.color }
			}), i.label]
		}, i.label))
	});
}
function Tip({ active, payload, label, formatter }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-56 rounded-md bg-panel px-2.5 py-2 text-xs shadow-[var(--shadow-border)]",
		children: [label != null && label !== "" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 font-mono text-[11px] text-mute",
			children: String(label)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-0.5",
			children: payload.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-mute",
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular font-mono text-ink",
					children: formatter && typeof p.value === "number" ? formatter(p.value, String(p.name)) : String(p.value)
				})]
			}, String(p.dataKey)))
		})]
	});
}
var tooltip = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
	content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}),
	cursor: {
		stroke: ink,
		strokeOpacity: .25
	},
	wrapperStyle: {
		zIndex: 20,
		outline: "none"
	}
});
function tooltipMoney(suffix = "") {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
		content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, { formatter: (v) => {
			const a = Math.abs(v);
			const sign = v < 0 ? "−" : "";
			if (a >= 1e3) return `${sign}$${(a / 1e3).toFixed(1)}B${suffix}`;
			if (a >= 1) return `${sign}$${a.toFixed(1)}M${suffix}`;
			return `${sign}$${a.toFixed(2)}${suffix}`;
		} }),
		cursor: {
			stroke: ink,
			strokeOpacity: .25
		},
		wrapperStyle: {
			zIndex: 20,
			outline: "none"
		}
	});
}
function pathOf(k, pMul, cv0, cvMul, vMul, floor) {
	const out = [];
	for (let m = 0; m < k.months; m++) {
		let P = k.p0 * pMul ** m;
		if (floor != null) P = Math.max(P, floor);
		const Cv = cv0 * cvMul ** m;
		const V = k.v0 * vMul ** m;
		const rev = P * V / 1e6;
		const vc = Cv * V / 1e6;
		out.push({
			m,
			P,
			Cv,
			V,
			rev,
			vc,
			profit: rev - vc - k.F
		});
	}
	return out;
}
function computePaths(k) {
	return {
		A: pathOf(k, k.pMulA, k.cvA, k.cvMulA, k.vMulA, null),
		B: pathOf(k, k.pMulB, k.cvB, k.cvMulB, k.vMulB, k.floorB),
		C: pathOf(k, k.pMulC, k.cvC, k.cvMulC, k.vMulC, k.floorC)
	};
}
function regimes(_k) {
	return [
		{
			key: "A",
			P: 3.5,
			Cv: 1,
			label: "P > Cv   volume helps"
		},
		{
			key: "B",
			P: 1.4,
			Cv: 1.1,
			label: "thin margin"
		},
		{
			key: "C",
			P: .7,
			Cv: 1.1,
			label: "P < Cv   volume hurts"
		}
	];
}
function volumeGrid() {
	const n = 80;
	const lo = 1e7;
	return Array.from({ length: n }, (_, i) => lo + 79e7 * i / 79);
}
function profitAtVolume(P, Cv, V, F) {
	return (P - Cv) * V / 1e6 - F;
}
function breakEvenSeries(k) {
	const n = 120;
	const lo = .3;
	return Array.from({ length: n }, (_, i) => {
		const P = lo + 3.7 * i / 119;
		return {
			P,
			Vbe: P > k.cvBe + .02 ? k.F * 1e6 / (P - k.cvBe) / 1e6 : null
		};
	});
}
function mixShift(k) {
	return Array.from({ length: k.months }, (_, m) => {
		const flagship = k.p0;
		const budget = Math.max(2 * .86 ** m, .25);
		const share = Math.max(.7 * .94 ** m, .12);
		return {
			m,
			flagship,
			budget,
			blended: share * flagship + (1 - share) * budget,
			share
		};
	});
}
function gpuHour(k, pathC) {
	const cost = k.F * 1e6 / k.gpuHours;
	return pathC.map((p) => ({
		m: p.m,
		revPerHour: p.P * p.V / k.gpuHours,
		cost
	}));
}
var yAxis = {
	tickFormatter: tickMoney,
	tick,
	axisLine,
	tickLine: false,
	width: 48,
	tickCount: 4,
	minTickGap: 18
};
function Chart01({ knobs }) {
	const { A, B, C } = computePaths(knobs);
	const data = A.map((_, i) => ({
		m: i,
		A: A[i].rev,
		B: B[i].rev,
		C: C[i].rev
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
		data,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "m",
				tick,
				axisLine,
				tickLine: false,
				minTickGap: 16
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { ...yAxis }),
			tooltipMoney(),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "A",
				name: "A together",
				stroke: green,
				strokeWidth: 2.2,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "B",
				name: "B floor",
				stroke: amber,
				strokeWidth: 2.2,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "C",
				name: "C price war",
				stroke: red,
				strokeWidth: 2.4,
				dot: false
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [
		{
			color: green,
			label: "A together"
		},
		{
			color: amber,
			label: "B floor"
		},
		{
			color: red,
			label: "C price war"
		}
	] })] });
}
function Chart02({ knobs }) {
	const V = volumeGrid();
	const regs = regimes(knobs);
	const data = V.map((v) => {
		const row = { v: v / 1e6 };
		for (const r of regs) row[r.key] = profitAtVolume(r.P, r.Cv, v, knobs.F);
		return row;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
		data,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "v",
				tick,
				axisLine,
				tickLine: false,
				minTickGap: 16
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, { ...yAxis }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
				y: 0,
				stroke: muted,
				strokeDasharray: "3 3"
			}),
			tooltipMoney(),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "A",
				name: "volume helps",
				stroke: green,
				strokeWidth: 2.4,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "B",
				name: "thin margin",
				stroke: amber,
				strokeWidth: 2.4,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "C",
				name: "volume hurts",
				stroke: red,
				strokeWidth: 2.4,
				dot: false
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [
		{
			color: green,
			label: "volume helps"
		},
		{
			color: amber,
			label: "thin margin"
		},
		{
			color: red,
			label: "volume hurts"
		}
	] })] });
}
function Chart03({ knobs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart02, { knobs });
}
function Chart04({ knobs }) {
	const data = breakEvenSeries(knobs).map((d) => ({
		P: Number(d.P.toFixed(2)),
		Vbe: d.Vbe
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
		data,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "P",
				tick,
				axisLine,
				tickLine: false,
				minTickGap: 16
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tick,
				axisLine,
				tickLine: false,
				width: 28,
				domain: [0, 12],
				tickCount: 4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
				x: knobs.cvBe,
				stroke: red,
				strokeDasharray: "4 4"
			}),
			tooltip,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
				type: "monotone",
				dataKey: "Vbe",
				name: "Tokens to cover F",
				stroke: amber,
				fill: amber,
				fillOpacity: .15,
				strokeWidth: 2.2,
				connectNulls: false
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [{
		color: amber,
		label: "tokens to cover F"
	}, {
		color: red,
		label: `Cv = $${knobs.cvBe.toFixed(2)}`
	}] })] });
}
function Chart05({ knobs }) {
	const { C } = computePaths(knobs);
	const data = C.map((p) => ({
		m: p.m,
		volume: p.V / 1e6,
		rev: p.rev,
		profit: p.profit,
		F: knobs.F
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
		data,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "m",
				tick,
				axisLine,
				tickLine: false,
				minTickGap: 16
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				yAxisId: "l",
				tick,
				axisLine,
				tickLine: false,
				width: 28,
				tickCount: 4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				yAxisId: "r",
				orientation: "right",
				...yAxis,
				width: 44
			}),
			tooltipMoney(),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				yAxisId: "l",
				type: "monotone",
				dataKey: "volume",
				name: "Volume",
				stroke: blue,
				strokeWidth: 2,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				yAxisId: "r",
				type: "monotone",
				dataKey: "rev",
				name: "Revenue",
				stroke: green,
				strokeWidth: 2,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				yAxisId: "r",
				type: "monotone",
				dataKey: "F",
				name: "Fixed cost",
				stroke: muted,
				strokeDasharray: "4 4",
				strokeWidth: 1.6,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				yAxisId: "r",
				type: "monotone",
				dataKey: "profit",
				name: "Profit",
				stroke: red,
				strokeWidth: 2.4,
				dot: false
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [
		{
			color: blue,
			label: "Volume"
		},
		{
			color: green,
			label: "Revenue"
		},
		{
			color: muted,
			label: "Fixed cost"
		},
		{
			color: red,
			label: "Profit"
		}
	] })] });
}
function Chart06({ knobs }) {
	const { C } = computePaths(knobs);
	const data = gpuHour(knobs, C).map((r) => ({
		m: r.m,
		rev: r.revPerHour,
		cost: r.cost
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
		data,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "m",
				tick,
				axisLine,
				tickLine: false,
				minTickGap: 16
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tick,
				axisLine,
				tickLine: false,
				width: 36,
				tickCount: 4,
				minTickGap: 18
			}),
			tooltip,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "rev",
				name: "$ / GPU-hour",
				stroke: blue,
				strokeWidth: 2.4,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "cost",
				name: "Committed cost",
				stroke: red,
				strokeDasharray: "4 4",
				strokeWidth: 1.8,
				dot: false
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [{
		color: blue,
		label: "$ / GPU-hour"
	}, {
		color: red,
		label: "Committed cost"
	}] })] });
}
function Chart07({ knobs }) {
	const data = mixShift(knobs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
		data,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "m",
				tick,
				axisLine,
				tickLine: false,
				minTickGap: 16
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tick,
				axisLine,
				tickLine: false,
				width: 32,
				tickCount: 4,
				minTickGap: 18
			}),
			tooltip,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "flagship",
				name: "Flagship list",
				stroke: green,
				strokeWidth: 2.2,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "budget",
				name: "Budget model",
				stroke: amber,
				strokeWidth: 2,
				dot: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
				type: "monotone",
				dataKey: "blended",
				name: "Blended P",
				stroke: red,
				strokeWidth: 2.4,
				dot: false
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [
		{
			color: green,
			label: "Flagship list"
		},
		{
			color: amber,
			label: "Budget model"
		},
		{
			color: red,
			label: "Blended P"
		}
	] })] });
}
var tierColor = {
	flagship: green,
	mid: amber,
	cheap: red
};
function Chart08() {
	const data = [...tokenCards].reverse().map((r) => ({
		name: r.short,
		value: Number(blended(r.inp, r.out).toFixed(2)),
		fill: tierColor[r.tier]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
		height: Math.max(248, data.length * 24 + 28),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			layout: "vertical",
			margin: {
				top: 8,
				right: 12,
				left: 4,
				bottom: 8
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					...gridProps,
					horizontal: false,
					vertical: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					type: "number",
					tick,
					axisLine,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					type: "category",
					dataKey: "name",
					tick,
					axisLine,
					tickLine: false,
					width: 78
				}),
				tooltip,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "value",
					name: "$ / MTok blended",
					radius: [
						0,
						3,
						3,
						0
					],
					barSize: 12,
					children: data.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: d.fill }, d.name))
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [
		{
			color: green,
			label: "Flagship"
		},
		{
			color: amber,
			label: "Mid-tier"
		},
		{
			color: red,
			label: "Cheap tier"
		}
	] })] });
}
function Chart09() {
	const data = tokenCards.map((r) => ({
		name: r.short,
		inp: r.inp,
		out: r.out
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
		height: 248,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			margin: {
				top: 10,
				right: 8,
				left: 0,
				bottom: 36
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "name",
					tick,
					axisLine,
					tickLine: false,
					interval: 0,
					angle: -36,
					textAnchor: "end",
					height: 44
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tick,
					axisLine,
					tickLine: false,
					width: 28
				}),
				tooltip,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "inp",
					name: "Input",
					fill: blue,
					radius: [
						2,
						2,
						0,
						0
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "out",
					name: "Output",
					fill: amber,
					radius: [
						2,
						2,
						0,
						0
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [{
		color: blue,
		label: "Input"
	}, {
		color: amber,
		label: "Output"
	}] })] });
}
function Chart10() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
		data: julyCuts,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "label",
				tick,
				axisLine,
				tickLine: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tick,
				axisLine,
				tickLine: false,
				width: 28
			}),
			tooltip,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				dataKey: "before",
				name: "Before 7/30",
				fill: muted,
				radius: [
					2,
					2,
					0,
					0
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				dataKey: "after",
				name: "Still listed 9/05",
				fill: red,
				radius: [
					2,
					2,
					0,
					0
				]
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [{
		color: muted,
		label: "Before 7/30"
	}, {
		color: red,
		label: "Still listed 9/05"
	}] })] });
}
function Chart11() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
		data: gpuRental,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "sil",
				tick,
				axisLine,
				tickLine: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tick,
				axisLine,
				tickLine: false,
				width: 28
			}),
			tooltip,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				dataKey: "hs",
				name: "Hyperscaler",
				fill: blue,
				radius: [
					2,
					2,
					0,
					0
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				dataKey: "neo",
				name: "Neocloud",
				fill: amber,
				radius: [
					2,
					2,
					0,
					0
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				dataKey: "mkt",
				name: "Marketplace",
				fill: red,
				radius: [
					2,
					2,
					0,
					0
				]
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [
		{
			color: blue,
			label: "Hyperscaler"
		},
		{
			color: amber,
			label: "Neocloud"
		},
		{
			color: red,
			label: "Marketplace"
		}
	] })] });
}
function Chart12() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint",
			children: "NVIDIA guarantee book"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
			height: 148,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: nvdaGuarantees,
				layout: "vertical",
				margin: {
					top: 8,
					right: 12,
					left: 4,
					bottom: 8
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						...gridProps,
						horizontal: false,
						vertical: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						tick,
						axisLine,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "short",
						tick,
						axisLine,
						tickLine: false,
						width: 92
					}),
					tooltipMoney(),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bar, {
						dataKey: "value",
						name: "$ billions",
						radius: [
							0,
							3,
							3,
							0
						],
						barSize: 16,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: blue }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: amber })]
					})
				]
			})
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint",
			children: "Last-gen rental, same day"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
			height: 148,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: h100Rental,
				layout: "vertical",
				margin: {
					top: 8,
					right: 12,
					left: 4,
					bottom: 8
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						...gridProps,
						horizontal: false,
						vertical: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						tick,
						axisLine,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "short",
						tick,
						axisLine,
						tickLine: false,
						width: 92
					}),
					tooltip,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bar, {
						dataKey: "value",
						name: "$ / GPU-hour",
						radius: [
							0,
							3,
							3,
							0
						],
						barSize: 16,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: red }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: amber }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: blue })
						]
					})
				]
			})
		})] })]
	});
}
function Chart13() {
	const data = [...circularBook].reverse();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
		height: Math.max(260, data.length * 26 + 20),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			layout: "vertical",
			margin: {
				top: 8,
				right: 12,
				left: 2,
				bottom: 8
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					...gridProps,
					horizontal: false,
					vertical: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					type: "number",
					tick,
					axisLine,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					type: "category",
					dataKey: "short",
					tick,
					axisLine,
					tickLine: false,
					width: 108
				}),
				tooltipMoney(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "value",
					name: "$ billions",
					fill: amber,
					radius: [
						0,
						3,
						3,
						0
					],
					barSize: 12
				})
			]
		})
	});
}
function Chart14() {
	const data = cashRows.map((r) => ({
		name: r.name,
		capex: r.capex,
		ocf: r.ocf,
		fcf: r.fcf
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
		height: 232,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			margin: chartMargin,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "name",
					tick,
					axisLine,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tick,
					axisLine,
					tickLine: false,
					width: 32
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
					y: 0,
					stroke: muted
				}),
				tooltipMoney(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "capex",
					name: "Capex",
					fill: amber,
					radius: [
						2,
						2,
						0,
						0
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "ocf",
					name: "OCF",
					fill: blue,
					radius: [
						2,
						2,
						0,
						0
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "fcf",
					name: "FCF",
					fill: red,
					radius: [
						2,
						2,
						0,
						0
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [
		{
			color: amber,
			label: "Capex"
		},
		{
			color: blue,
			label: "OCF"
		},
		{
			color: red,
			label: "FCF"
		}
	] })] });
}
function Chart15() {
	const data = guideRevisions.map((r) => ({
		name: r.name,
		before: r.before,
		after: r.after
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
		height: 216,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data,
			margin: chartMargin,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "name",
					tick,
					axisLine,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tick,
					axisLine,
					tickLine: false,
					width: 32,
					domain: [110, 240]
				}),
				tooltipMoney(),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "before",
					name: "Prior guide",
					fill: muted,
					radius: [
						2,
						2,
						0,
						0
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "after",
					name: "July revision",
					fill: green,
					radius: [
						2,
						2,
						0,
						0
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [{
		color: muted,
		label: "Prior guide"
	}, {
		color: green,
		label: "July revision"
	}] })] });
}
function Chart16() {
	const data = cashRows.map((r) => ({
		name: r.name,
		ratio: Number((r.capex / r.ocf).toFixed(2))
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
		data,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "name",
				tick,
				axisLine,
				tickLine: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tick,
				axisLine,
				tickLine: false,
				width: 28
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
				y: 1,
				stroke: muted,
				strokeDasharray: "4 4"
			}),
			tooltip,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				dataKey: "ratio",
				name: "Capex / OCF",
				radius: [
					2,
					2,
					0,
					0
				],
				children: data.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: d.ratio >= 1 ? red : d.ratio >= .9 ? amber : green }, d.name))
			})
		]
	}) });
}
function Chart17() {
	const tot = mag7.reduce((s, r) => s + r.weight, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
		data: mag7,
		margin: chartMargin,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
				dataKey: "name",
				tick,
				axisLine,
				tickLine: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
				tick,
				axisLine,
				tickLine: false,
				width: 28
			}),
			tooltip,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
				dataKey: "weight",
				name: "SPY weight %",
				fill: blue,
				radius: [
					2,
					2,
					0,
					0
				]
			})
		]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-2 font-mono text-[11px] text-faint",
		children: [
			"Mag7 reconstruction ",
			tot.toFixed(1),
			"%"
		]
	})] });
}
function Chart18() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
		height: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
			data: equalWeight,
			margin: chartMargin,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "label",
					tick,
					axisLine,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tick,
					axisLine,
					tickLine: false,
					width: 28
				}),
				tooltip,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "rsp",
					name: "RSP equal-weight",
					fill: green,
					radius: [
						2,
						2,
						0,
						0
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
					dataKey: "spy",
					name: "SPY cap-weight",
					fill: blue,
					radius: [
						2,
						2,
						0,
						0
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesLegend, { items: [{
		color: green,
		label: "RSP equal-weight"
	}, {
		color: blue,
		label: "SPY cap-weight"
	}] })] });
}
function Chart19() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint",
				children: "CoreWeave equity"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
				height: 148,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: [{
						name: "52-week high",
						v: rimCredit.equityHigh
					}, {
						name: "Close 9/04",
						v: rimCredit.equityClose
					}],
					margin: chartMargin,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "name",
							tick,
							axisLine,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick,
							axisLine,
							tickLine: false,
							width: 32
						}),
						tooltip,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bar, {
							dataKey: "v",
							name: "Share price",
							radius: [
								2,
								2,
								0,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: muted }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: red })]
						})
					]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint",
				children: "CDS path (secondary)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
				height: 148,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
					data: rimCredit.cds,
					margin: chartMargin,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "label",
							tick,
							axisLine,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick,
							axisLine,
							tickLine: false,
							width: 32
						}),
						tooltip,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							type: "monotone",
							dataKey: "bp",
							name: "5y CDS bp",
							stroke: amber,
							strokeWidth: 2.2,
							dot: {
								r: 3.5,
								fill: amber
							}
						})
					]
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint",
				children: "Debt stock"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
				height: 148,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: rimCredit.debt,
					margin: chartMargin,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "label",
							tick,
							axisLine,
							tickLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tick,
							axisLine,
							tickLine: false,
							width: 28
						}),
						tooltip,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bar, {
							dataKey: "bn",
							name: "Debt $B",
							radius: [
								2,
								2,
								0,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: blue }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: amber })]
						})
					]
				})
			})] })
		]
	});
}
function Chart20() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint",
			children: "NVIDIA Q2 FY27 mix"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
			height: 148,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: [{
					name: "Rest",
					v: Number((nvdaHub.total - nvdaHub.dataCenter).toFixed(2))
				}, {
					name: "Data Center",
					v: nvdaHub.dataCenter
				}],
				margin: chartMargin,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "name",
						tick,
						axisLine,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick,
						axisLine,
						tickLine: false,
						width: 32
					}),
					tooltipMoney(),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Bar, {
						dataKey: "v",
						name: "Q2 FY27 $B",
						radius: [
							2,
							2,
							0,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: muted }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: green })]
					})
				]
			})
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint",
			children: "Three direct customers"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartBox, {
			height: 148,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data: nvdaHub.customers,
				margin: chartMargin,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { ...gridProps }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "name",
						tick,
						axisLine,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick,
						axisLine,
						tickLine: false,
						width: 28
					}),
					tooltip,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "pct",
						name: "H1 FY27 %",
						fill: blue,
						radius: [
							2,
							2,
							0,
							0
						]
					})
				]
			})
		})] })]
	});
}
function Chart21() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-52 flex-col items-center justify-center rounded-lg bg-wash px-6 text-center shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl text-ink",
			children: "Not scored"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-xs text-sm text-mute",
			children: "Tokens sold and GPU utilization have no first-class primary print in this pack. A rate card is not utilization. A rental series is not volume."
		})]
	});
}
function FigureChart({ id }) {
	const knobs = useKnobs((s) => s.knobs);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ClientOnly, { children: [
		id === "01" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart01, { knobs }),
		id === "02" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart02, { knobs }),
		id === "03" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart03, { knobs }),
		id === "04" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart04, { knobs }),
		id === "05" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart05, { knobs }),
		id === "06" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart06, { knobs }),
		id === "07" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart07, { knobs }),
		id === "08" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart08, {}),
		id === "09" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart09, {}),
		id === "10" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart10, {}),
		id === "11" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart11, {}),
		id === "12" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart12, {}),
		id === "13" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart13, {}),
		id === "14" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart14, {}),
		id === "15" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart15, {}),
		id === "16" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart16, {}),
		id === "17" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart17, {}),
		id === "18" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart18, {}),
		id === "19" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart19, {}),
		id === "20" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart20, {}),
		id === "21" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chart21, {})
	] });
}
async function sharePayload(title, text, url) {
	const href = url ?? (typeof window !== "undefined" ? window.location.href : "");
	try {
		if (typeof navigator !== "undefined" && navigator.share) {
			await navigator.share({
				title,
				text,
				url: href
			});
			return "shared";
		}
	} catch (err) {
		if (err.name === "AbortError") return "aborted";
	}
	try {
		await navigator.clipboard.writeText(href);
		return "copied";
	} catch {
		return "failed";
	}
}
//#endregion
export { sharePayload as a, knobsToSearch as i, computePaths as n, useKnobs as o, knobsFromSearch as r, FigureChart as t };
