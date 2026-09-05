import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as cn } from "./router-NoGyaqkl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Tag-BKsvpXw7.js
var import_jsx_runtime = require_jsx_runtime();
var STYLES = {
	measured: "text-up shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-up)_35%,transparent)]",
	hypothesis: "text-brass shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-brass)_35%,transparent)]",
	mixed: "text-info shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-info)_35%,transparent)]",
	unscored: "text-mute shadow-[inset_0_0_0_1px_var(--color-hair)]"
};
var LABELS = {
	measured: "Measured",
	hypothesis: "Hypothesis",
	mixed: "Mixed",
	unscored: "Not scored"
};
function Tag({ kind, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex h-6 items-center rounded-sm px-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-mute shadow-[inset_0_0_0_1px_var(--color-hair)]", kind && STYLES[kind], className),
		children: children ?? (kind ? LABELS[kind] : null)
	});
}
//#endregion
export { Tag as t };
