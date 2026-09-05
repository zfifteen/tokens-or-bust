//#region node_modules/.nitro/vite/services/ssr/assets/figures-CSTAcF3l.js
var CHAPTERS = [
	{
		id: "identity",
		label: "Identity",
		kicker: "The identity · Hypothesis"
	},
	{
		id: "prices",
		label: "Prices",
		kicker: "What silicon can charge · Measured"
	},
	{
		id: "paper",
		label: "Paper",
		kicker: "Paper on the books"
	},
	{
		id: "cash",
		label: "Cash",
		kicker: "Cash against capex"
	},
	{
		id: "tape",
		label: "Tape",
		kicker: "Index and credit"
	},
	{
		id: "hub",
		label: "Hub",
		kicker: "The hub"
	}
];
var FIGURES = [
	{
		id: "01",
		n: 1,
		title: "Revenue can peak while tokens explode",
		lede: "Revenue is price times volume. If price falls faster than volume grows, monthly revenue can rise for a while and then fall.",
		what: "Path A lets price and variable cost fall together. Path B is a price war with a floor. Path C cuts price faster still. Only the sketch knows these paths. They are not three companies.",
		how: "The vertical axis is monthly revenue in dollars, not tokens. A rising token count can sit under a falling dollar line.",
		change: "A measured series of blended realized P times tokens sold. That series does not exist in this pack.",
		tag: "hypothesis",
		claims: ["H5"],
		chapter: "identity",
		footer: "Hypothesis · illustrative paths, not a company filing"
	},
	{
		id: "02",
		n: 2,
		title: "Only one regime is saved by volume",
		lede: "Hold price and variable cost still, and slide volume. The slope of profit tells you whether more tokens help.",
		what: "Green: price is well above variable cost, so extra volume covers fixed cost. Amber: the margin is thin, so you need a great deal of volume. Red: price is below variable cost, so extra volume deepens the hole.",
		how: "The dotted line is zero profit. Crossing it from below is break-even. The red line never crosses it by going right.",
		tag: "hypothesis",
		claims: ["H5"],
		chapter: "identity",
		footer: "Hypothesis · F held fixed"
	},
	{
		id: "03",
		n: 3,
		title: "The identity, with P and Cv held still",
		lede: "This is the same formula drawn so the slope versus volume is the whole point.",
		what: "Profit equals (P minus Cv) times V, minus F. Negative unit margin means the line falls as volume rises. That is the careful version of “volume will not balance the books.”",
		tag: "hypothesis",
		claims: ["H5"],
		chapter: "identity",
		footer: "Hypothesis · Profit = (P − Cv)·V − F with P and Cv held fixed"
	},
	{
		id: "04",
		n: 4,
		title: "Break-even volume heads to infinity",
		lede: "Tokens required to cover F equal F divided by (P minus Cv). As P approaches Cv, that quotient has no ceiling.",
		what: "The dashed line is variable cost. To the right, some finite volume still covers F. To the left, selling more cannot cover F.",
		tag: "hypothesis",
		claims: ["H5"],
		chapter: "identity",
		footer: "Hypothesis · break-even volume = F / (P − Cv)"
	},
	{
		id: "05",
		n: 5,
		title: "Volume and revenue can look fine while profit does not",
		lede: "On the price-war path, tokens and even dollars of revenue keep rising. Fixed cost does not shrink. Profit does.",
		what: "The left axis is volume. The right axis is dollars. The grey dashed line is F. Green revenue can sit near F while red profit is already negative, because variable cost is also being paid.",
		how: "Do not compare the blue volume line’s height to the dollar lines. They are different units sharing a month axis.",
		tag: "hypothesis",
		claims: ["H5"],
		chapter: "identity",
		footer: "Hypothesis · path C · F does not shrink when P falls"
	},
	{
		id: "06",
		n: 6,
		title: "Filling the boxes cheaper",
		lede: "A GPU-hour is one hour on one graphics processor. If the hours are already paid for, a lower token price makes each hour produce less cash.",
		what: "The red dashed line is committed cost per hour, F spread across a fixed pool of GPU-hours a month. That pool size is Hypothesis. The blue line is token revenue per hour on path C.",
		tag: "hypothesis",
		claims: ["H5"],
		chapter: "identity",
		footer: "Hypothesis · GPU-hour pool held fixed"
	},
	{
		id: "07",
		n: 7,
		title: "The flagship list can hold while blended P falls",
		lede: "Blended realized price is the volume-weighted average of what customers actually buy. That blended P is what enters the profit formula.",
		what: "Green is an unchanged flagship list. Amber is a cheaper model. Red is the mix. Customers routing to the cheap tier pull the average down without a flagship cut.",
		change: "A measured mix of tokens by model. Official cards in the next chapter are a snapshot of list prices, not of mix.",
		tag: "hypothesis",
		claims: ["H5"],
		chapter: "identity",
		footer: "Hypothesis · blended P is what enters the profit formula"
	},
	{
		id: "08",
		n: 8,
		title: "Official cards, blended the same way",
		lede: "Each bar is (three parts input plus one part output) divided by four. That 3:1 blend is a convention used to compare cards. It is not a filing.",
		what: "Flagship cards cluster near 10 to 20 dollars blended. The cheap tier, including GPT-5.6 Luna at 20 cents input and 1.20 dollars output, sits far below. Mid-tier cards occupy the middle.",
		how: "These are list prices on official API pages read on 5 September 2026. They are not tokens sold. Sol’s 4 / 20 row is labeled promotional through at least 21 November 2026. Gemini 3.8 Flash’s 0.75 / 3.75 row is introductory through 31 December 2026.",
		tag: "measured",
		claims: ["H5"],
		chapter: "prices",
		footer: "Measured · official API cards read 2026-09-05 · 3:1 blend is a convention, not a filing"
	},
	{
		id: "09",
		n: 9,
		title: "Output is the expensive side",
		lede: "Reasoning traces and long answers burn output tokens. A workload that is heavy on output pays the taller bar, not the input bar.",
		what: "For every card in this pack, output costs more per million tokens than input. Agent workloads that write long traces therefore realize a higher average P than a short chat on the same model — and a higher bill. Whether that bill covers Cv is a different question, and is not measured here.",
		tag: "measured",
		claims: ["H5"],
		chapter: "prices",
		footer: "Measured · official API cards 2026-09-05 · standard processing, not batch"
	},
	{
		id: "10",
		n: 10,
		title: "The July cheap-tier cut is still on the card",
		lede: "On 30 July 2026 OpenAI cut GPT-5.6 Luna 80 percent and Terra 20 percent. Both cuts were still listed on 5 September.",
		what: "Luna input moved from 1.00 to 0.20 dollars per million tokens. Luna output moved from 6.00 to 1.20. Terra’s −20 percent implies a prior card of 2.50 / 15.00, landing at 2.00 / 12.00. Company language called this a pass-through of serving-cost improvements. That is a measured price cut. It is not a measured statement that volume rose enough to hold dollar revenue.",
		tag: "measured",
		claims: ["H5"],
		chapter: "prices",
		footer: "Measured · OpenAI first-party cut 2026-07-30 · Terra −20% implied prior card 2.50 / 15.00"
	},
	{
		id: "11",
		n: 11,
		title: "Last-gen rental already clears at one-third of sticker",
		lede: "These are dollars per GPU-hour on a published on-demand series, not a company filing. Hyperscaler, neocloud, and marketplace are three different venues for the same silicon.",
		what: "On 4 September 2026 the CCIR guaranteed on-demand print put H100 neocloud at 3.71 dollars an hour against a hyperscaler list of 10.53. H200 and B200 show the same pattern. A residual-value guarantee written against an earlier, higher rental deck is looking at a different conversion rate than the deck.",
		how: "B300 has no hyperscaler print in this series. Interruptible rates, which are lower, are not drawn here. A rate is not utilization.",
		tag: "measured",
		claims: ["H5"],
		chapter: "prices",
		footer: "Measured as a published series · CCIR 2026-09-04 07:30 ET · US & EU on-demand"
	},
	{
		id: "12",
		n: 12,
		title: "The guarantee book and the rental print do not share a unit",
		lede: "Left panel is NVIDIA’s disclosed gross maximum exposure. Right panel is the same-week H100 rental. They are placed together because H5 is a race between those clocks, not because the axes match.",
		what: "NVIDIA’s 17 August 2026 8-K caps SB Energy residual-value guaranties at 105 billion dollars, with OpenAI as tenant. The 10-Q adds 3.5 billion of AI-cloud land, power, and shell. First phase is expected fiscal 2029. Trigger language is insolvency default or missed rent. That cap was filed after the Luna cut.",
		how: "Do not divide 105 billion by 3.71. The left axis is a legal maximum. The right axis is a spot rental. The claim is only that paper sized on a higher conversion rate is live while the cheap-tier and neocloud prints have already moved.",
		tag: "measured",
		claims: ["H3", "H5"],
		chapter: "paper",
		footer: "Measured · NVDA 8-K 2026-08-17 / 10-Q · CCIR 2026-09-04 · different units on purpose"
	},
	{
		id: "13",
		n: 13,
		title: "Announced is not funded is not guaranteed is not revenue",
		lede: "These bars are different kinds of paper. Adding them into one total would mix remaining performance obligations, leases, equity, and residual-value caps.",
		what: "Oracle remaining performance obligations of 638 billion dollars and AWS performance obligations not yet recognized of 496 billion are backlog, not cash in the door. Microsoft’s 329 billion of uncommenced datacenter leases are commitments to take space. NVIDIA’s funded OpenAI equity is 30 billion, not the 100 billion letter of intent from September 2025. Amazon’s OpenAI equity closed at 50 billion.",
		change: "A guarantee that had to be funded, or a take-or-pay miss disclosed in a filing. Neither printed in this pack.",
		tag: "measured",
		claims: ["H3"],
		chapter: "paper",
		footer: "Measured from filings and IR · announced is not funded is not guaranteed is not revenue · 2026-09-05 pack"
	},
	{
		id: "14",
		n: 14,
		title: "Spend is large. Cash conversion is not uniform",
		lede: "Each group is one company’s cited period. Company free-cash-flow definitions differ. Do not add the red bars into one true total.",
		what: "Amazon’s trailing-twelve-month free cash flow is −7.6 billion dollars. Alphabet’s second-quarter free cash flow is −5.9 billion. Meta’s second-quarter free cash flow is 0.78 billion. Microsoft’s fiscal fourth quarter is still +19.6 billion. Oracle’s fiscal 2026 free cash flow is −23.7 billion. Brass bars are cash capex. Blue bars are operating cash flow.",
		how: "Oracle’s bars are a full year. Amazon’s red bar is trailing twelve months. The others are the quarter named on the axis. Demand lines in the same filings were still growing.",
		tag: "measured",
		claims: ["H2"],
		chapter: "cash",
		footer: "Measured · company FCF definitions differ · AMZN FCF is TTM; ORCL is full FY26; others are the quarter cited"
	},
	{
		id: "15",
		n: 15,
		title: "July’s capex guides went up, not down",
		lede: "Sequence step 6 in the unwind plan is a hyperscaler capex cut. That step has not printed.",
		what: "Amazon raised calendar 2026 cash capex from 200 billion dollars to 220 billion. Alphabet’s midpoint moved from about 185 billion to 200 billion. Meta raised the floor from 125 billion to 130 billion. Count: three up, zero down. Microsoft’s fiscal 2027 outlook of 175 billion is a lease-mix change and is not scored as a cut.",
		how: "A boom that is still raising the spend envelope is not a completed unwind, even if free cash flow is compressed. That is why H4 fails as regime change.",
		tag: "measured",
		claims: ["H2", "H4"],
		chapter: "cash",
		footer: "Measured · July Q2 season · 3 up / 0 down · MSFT FY27 $175B is a lease-mix change, not scored as a cut"
	},
	{
		id: "16",
		n: 16,
		title: "When capex exceeds operating cash flow",
		lede: "A ratio above 1.0 means the company spent more cash on equipment in the period than operations produced.",
		what: "Amazon 1.17, Alphabet 1.15, Meta 0.94, Microsoft 0.65, Oracle fiscal 2026 1.74. The four-name second-quarter sum is 163.9 / 171.8, about 0.95. H2 is live on cash and not live on demand. The turning print is a guide cut, which has not printed.",
		tag: "measured",
		claims: ["H2"],
		chapter: "cash",
		footer: "Measured · four-name Q2 sum 163.9 / 171.8 ≈ 0.95 · ratio above 1 means capex exceeded OCF"
	},
	{
		id: "17",
		n: 17,
		title: "The cap-weight index is still a concentrated bet",
		lede: "These are SPY holding weights on 4 September 2026. Adding them gives a Mag7 reconstruction of about 33.6 percent. Top-10 of SPY was 37.83 percent.",
		what: "NVIDIA alone is 8.01 percent of SPY. Early-June commentary put Mag7 near 35 percent. The current reconstruction is modest deconcentration, not a collapse. Commentary about the June peak is Hypothesis. The 4 September weights are Measured.",
		tag: "measured",
		claims: ["H1"],
		chapter: "tape",
		footer: "Measured · TradeSmith SPY holdings 2026-09-04 · top-10 of SPY was 37.83%"
	},
	{
		id: "18",
		n: 18,
		title: "Equal-weight has been leading",
		lede: "RSP holds the S&P 500 names in equal size. SPY holds them by market cap. When RSP leads, the average stock is beating the giants.",
		what: "ETF.com as of early September 2026: RSP three-month +4.48 percent versus SPY +0.99 percent. Year to date RSP +15.04 percent versus SPY +12.80 percent. That is partial evidence for H1, not a completed deconcentration.",
		tag: "measured",
		claims: ["H1"],
		chapter: "tape",
		footer: "Measured · ETF.com as-of early September 2026"
	},
	{
		id: "19",
		n: 19,
		title: "Stress printed at the rim, not as a missed payment",
		lede: "Equity and the debt stock are Measured. The CDS path is secondary tape, tagged Hypothesis-adjacent.",
		what: "CoreWeave closed at 89.36 dollars on 4 September 2026, about 42 percent below the 52-week high of 153.20. Debt was about 35 billion dollars on 30 June 2026 versus about 21 billion at year-end 2025. Five-year CDS went from about 452 basis points in early June to about 855 in late July, after about 881 in December 2025. That is a round-trip, not a new peak. Financing still closed. No missed-payment print was found in this pack.",
		how: "A bounce in the share price is an equity mark. It does not retire the debt stock or the guarantee book.",
		tag: "mixed",
		claims: ["H3"],
		chapter: "tape",
		footer: "Mixed · equity and debt stock Measured · CDS and new-issue path Hypothesis-adjacent"
	},
	{
		id: "20",
		n: 20,
		title: "NVIDIA’s data-center engine is still intact",
		lede: "Layer C in the unwind sequence is supplier earnings. This quarter does not break it.",
		what: "Data Center revenue was 89.023 billion dollars in fiscal second quarter 2027, +117 percent year over year and +18 percent quarter over quarter, out of 96.221 billion total. Company gross margin was 75.0 percent. One direct customer was 16 percent of revenue in the quarter. Three directs were 16, 15, and 13 percent of the first half. Shares closed at 230.36 dollars on 4 September, about 2.6 percent below the mid-May high near 236.54.",
		how: "H5 can be live on the cheap tier while the hub that sells the chips is still printing growth. Those are different clocks.",
		tag: "measured",
		claims: ["H4"],
		chapter: "hub",
		footer: "Measured · NVDA 10-Q Q2 FY27 · Data Center $89.023B, +117% YoY, +18% QoQ · company GM 75.0%"
	},
	{
		id: "21",
		n: 21,
		title: "Tokens sold and utilization are still blank",
		lede: "A rate card is not utilization. A rental series is not volume. This panel is empty on purpose.",
		what: "Nothing, by design. H5’s kill condition includes a primary volume offset. Until a first-class print of tokens sold or GPU-hours consumed exists in this folder, do not infer that cheaper tokens were “made up in volume.”",
		change: "A provider disclosure of tokens served, or a utilization series with a named primary source. Do not invent the stub ahead of that print.",
		tag: "unscored",
		claims: ["H5"],
		chapter: "hub",
		footer: "Empty on purpose · H5 stays open until a volume offset is measured"
	}
];
function figureById(id) {
	return FIGURES.find((f) => f.id === id);
}
function nextFigure(id) {
	const i = FIGURES.findIndex((f) => f.id === id);
	if (i < 0) return void 0;
	return FIGURES[(i + 1) % FIGURES.length];
}
function prevFigure(id) {
	const i = FIGURES.findIndex((f) => f.id === id);
	if (i < 0) return void 0;
	return FIGURES[(i - 1 + FIGURES.length) % FIGURES.length];
}
//#endregion
export { prevFigure as a, nextFigure as i, FIGURES as n, figureById as r, CHAPTERS as t };
