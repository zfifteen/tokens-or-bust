import { i as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ChevronLeft, r as Share2, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-NoGyaqkl.mjs";
import { t as Tag } from "./Tag-BKsvpXw7.mjs";
import { t as Button } from "./button-jjQKrS3Q.mjs";
import { a as sharePayload, t as FigureChart } from "./share-CRgkIZyc.mjs";
import { a as prevFigure, i as nextFigure, n as FIGURES, r as figureById } from "./figures-CSTAcF3l.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/figures._id-DrZx2fWT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FigurePage() {
	const { id } = Route.useParams();
	const fig = figureById(id) ?? FIGURES[0];
	const prev = prevFigure(fig.id);
	const next = nextFigure(fig.id);
	const navigate = useNavigate();
	const [toast, setToast] = (0, import_react.useState)(null);
	const startX = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
			if ((e.key === "j" || e.key === "J") && next) {
				e.preventDefault();
				navigate({
					to: "/figures/$id",
					params: { id: next.id }
				});
			}
			if ((e.key === "k" || e.key === "K") && prev) {
				e.preventDefault();
				navigate({
					to: "/figures/$id",
					params: { id: prev.id }
				});
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		navigate,
		next,
		prev
	]);
	async function share() {
		const result = await sharePayload(`Conversion Rate — ${fig.title}`, fig.lede);
		if (result === "copied") setToast("Link copied");
		if (result === "shared") setToast("Shared");
		window.setTimeout(() => setToast(null), 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "px-5 pt-6",
		onTouchStart: (e) => {
			startX.current = e.changedTouches[0]?.clientX ?? null;
		},
		onTouchEnd: (e) => {
			const x = e.changedTouches[0]?.clientX;
			if (startX.current == null || x == null) return;
			const dx = x - startX.current;
			if (dx < -56 && next) navigate({
				to: "/figures/$id",
				params: { id: next.id }
			});
			if (dx > 56 && prev) navigate({
				to: "/figures/$id",
				params: { id: prev.id }
			});
			startX.current = null;
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/figures",
					className: "inline-flex h-11 items-center gap-1 text-sm text-mute",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Suite"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[11px] text-faint",
					children: [String(fig.n).padStart(2, "0"), " / 21"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { kind: fig.tag }), fig.claims.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: c }, c))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-[1.7rem] text-ink",
				children: fig.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[1.02rem] text-mute",
				children: fig.lede
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureChart, { id: fig.id })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-mono text-[10px] leading-snug text-faint",
				children: fig.footer
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3 text-sm text-mute",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-medium text-ink",
						children: "What this shows. "
					}), fig.what] }),
					fig.how && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-medium text-ink",
						children: "How to read it. "
					}), fig.how] }),
					fig.change && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-medium text-ink",
						children: "What would change it. "
					}), fig.change] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-2 pb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						className: "flex-1",
						disabled: !prev,
						onClick: () => prev && navigate({
							to: "/figures/$id",
							params: { id: prev.id }
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Prev"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						size: "icon",
						onClick: share,
						"aria-label": "Share figure",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						className: "flex-1",
						disabled: !next,
						onClick: () => next && navigate({
							to: "/figures/$id",
							params: { id: next.id }
						}),
						children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})
				]
			}),
			toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "fixed bottom-20 left-1/2 z-40 -translate-x-1/2 rounded-full bg-ink px-3 py-1.5 text-xs text-canvas",
				children: toast
			})
		]
	});
}
//#endregion
export { FigurePage as component };
