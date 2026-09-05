import "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowRight, u as BookMarked } from "../_libs/lucide-react.mjs";
import { r as cn } from "./router-NoGyaqkl.mjs";
import { i as GLOSSARY, n as DANGER, r as DISCLAIMER } from "./hypotheses-Bxek84gB.mjs";
import { t as Tag } from "./Tag-BKsvpXw7.mjs";
import { t as asOf } from "./measured-1hSTm6Su.mjs";
import { t as Button } from "./button-jjQKrS3Q.mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var Drawer$1 = Drawer.Root;
var DrawerTrigger = Drawer.Trigger;
Drawer.Close;
var DrawerPortal = Drawer.Portal;
function DrawerOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, {
		className: cn("fixed inset-0 z-40 bg-canvas/70", className),
		...props
	});
}
function DrawerContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DrawerPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
		className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex max-h-[88dvh] flex-col rounded-t-2xl bg-panel pb-[env(safe-area-inset-bottom)] shadow-[var(--shadow-border)]", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-1 w-10 rounded-full bg-hair" }), children]
	})] });
}
function DrawerTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
		className: cn("font-display text-xl text-ink", className),
		...props
	});
}
function DrawerDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Description, {
		className: cn("text-sm text-mute", className),
		...props
	});
}
function GlossarySheet({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerTrigger, {
		asChild: true,
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-y-auto px-5 pb-8 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerTitle, { children: "How to read the formula" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerDescription, {
				className: "mt-1",
				children: "Profit = (P − Cv) · V − F"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-5 space-y-4",
				children: GLOSSARY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-mono text-sm text-brass",
					children: g.dt
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1 text-sm text-mute",
					children: g.dd
				})] }, g.dt))
			})
		]
	}) })] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.14em] text-brass",
				children: "research / unwind"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-[2.35rem] leading-[1.05] text-ink",
				children: "Conversion Rate"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-[1.05rem] leading-snug text-mute",
				children: "Twenty-one figures on whether installed silicon can still pay for the paper that bought it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 font-mono text-[11px] text-faint",
				children: [
					"As-of ",
					asOf,
					" · not a book"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center gap-3 rounded-xl bg-panel px-4 py-3 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular font-display text-3xl text-brass",
					children: DANGER.level
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink",
					children: DANGER.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-mute",
					children: "Loop danger · H5 live on the cheap tier"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 rounded-xl bg-wash px-4 py-3 font-mono text-[13px] text-ink shadow-[var(--shadow-border)]",
				children: "Profit = (P − Cv) · V − F"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/play",
						children: ["Play the identity", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "secondary",
					size: "lg",
					className: "w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/figures",
						children: "Browse 21 figures"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaimRow, {
						id: "H5",
						label: "Conversion rate",
						state: "Open, live on cheap tier"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaimRow, {
						id: "H4",
						label: "Regime change",
						state: "Fail as regime change"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaimRow, {
						id: "H2",
						label: "Capex vs cash",
						state: "Live on cash, not demand"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { kind: "measured" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { kind: "hypothesis" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { kind: "mixed" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlossarySheet, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex h-8 items-center gap-1.5 rounded-sm px-2 font-mono text-[11px] uppercase tracking-[0.08em] text-mute shadow-[inset_0_0_0_1px_var(--color-hair)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookMarked, {
							className: "size-3.5",
							strokeWidth: 1.6
						}), "Glossary"]
					}) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 max-w-prose text-sm text-faint",
				children: DISCLAIMER
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 pb-6 text-xs text-faint",
				children: "Source pack: zfifteen / micro-hedge-fund · research/unwind/plots"
			})
		]
	});
}
function ClaimRow({ id, label, state }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/claims",
		className: "flex min-h-14 items-center justify-between gap-3 rounded-xl bg-panel px-4 py-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] uppercase tracking-[0.1em] text-brass",
			children: id
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-ink",
			children: label
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-[46%] text-right text-xs text-mute",
			children: state
		})]
	});
}
//#endregion
export { Home as component };
