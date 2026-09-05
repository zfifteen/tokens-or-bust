import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ChevronRight } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-NoGyaqkl.mjs";
import { t as Tag } from "./Tag-BKsvpXw7.mjs";
import { n as FIGURES, t as CHAPTERS } from "./figures-CSTAcF3l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/figures.index-BjBHBwfB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [{
	id: "all",
	label: "All"
}, ...CHAPTERS.map((c) => ({
	id: c.id,
	label: c.label
}))];
function FiguresIndex() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [tag, setTag] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => FIGURES.filter((f) => filter === "all" ? true : f.chapter === filter).filter((f) => tag === "all" ? true : f.tag === tag), [filter, tag]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.14em] text-brass",
				children: "Twenty-one figures"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-[1.85rem] text-ink",
				children: "The suite"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mute",
				children: "Tap a figure to open the live chart. Identity sketches follow the playground knobs. The rest are the 5 September 2026 pack."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f.id),
					className: cn("h-10 shrink-0 rounded-lg px-3 text-sm", filter === f.id ? "bg-ink text-canvas" : "bg-panel text-mute shadow-[var(--shadow-border)]"),
					children: f.label
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex gap-2 overflow-x-auto pb-1",
				children: [
					"all",
					"hypothesis",
					"measured",
					"mixed",
					"unscored"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTag(t),
					className: cn("h-8 shrink-0 rounded-sm px-2 font-mono text-[10px] uppercase tracking-[0.08em]", tag === t ? "bg-panel text-ink" : "text-faint"),
					children: t === "all" ? "Any tag" : t
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-2 pb-8",
				children: list.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/figures/$id",
					params: { id: f.id },
					className: "flex min-h-16 items-start gap-3 rounded-xl bg-panel px-3 py-3 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 w-6 shrink-0 font-mono text-[11px] text-faint",
							children: String(f.n).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex flex-wrap items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { kind: f.tag }), f.claims.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: c }, c))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-[1.05rem] leading-snug text-ink",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 line-clamp-2 text-sm text-mute",
									children: f.lede
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "mt-1 size-4 shrink-0 text-faint" })
					]
				}) }, f.id))
			})
		]
	});
}
//#endregion
export { FiguresIndex as component };
