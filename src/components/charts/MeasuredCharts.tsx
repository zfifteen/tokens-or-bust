import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Cell,
  ReferenceLine,
} from "recharts";
import {
  ChartBox,
  SeriesLegend,
  tick,
  axisLine,
  gridProps,
  chartMargin,
  tooltip,
  tooltipMoney,
} from "./theme";
import {
  tokenCards,
  blended,
  julyCuts,
  gpuRental,
  nvdaGuarantees,
  h100Rental,
  circularBook,
  cashRows,
  guideRevisions,
  mag7,
  equalWeight,
  rimCredit,
  nvdaHub,
} from "@/lib/measured";
import { green, amber, red, blue, muted } from "@/lib/palette";

const tierColor = { flagship: green, mid: amber, cheap: red };

export function Chart08() {
  const data = [...tokenCards].reverse().map((r) => ({
    name: r.short,
    value: Number(blended(r.inp, r.out).toFixed(2)),
    fill: tierColor[r.tier],
  }));
  return (
    <div>
      <ChartBox height={Math.max(248, data.length * 24 + 28)}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 12, left: 4, bottom: 8 }}>
          <CartesianGrid {...gridProps} horizontal={false} vertical />
          <XAxis type="number" tick={tick} axisLine={axisLine} tickLine={false} />
          <YAxis type="category" dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} width={78} />
          {tooltip}
          <Bar dataKey="value" name="$ / MTok blended" radius={[0, 3, 3, 0]} barSize={12}>
            {data.map((d) => (
              <Cell key={d.name} fill={d.fill} />
            ))}
          </Bar>
        </BarChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: green, label: "Flagship" },
          { color: amber, label: "Mid-tier" },
          { color: red, label: "Cheap tier" },
        ]}
      />
    </div>
  );
}

export function Chart09() {
  const data = tokenCards.map((r) => ({ name: r.short, inp: r.inp, out: r.out }));
  return (
    <div>
      <ChartBox height={248}>
        <BarChart data={data} margin={{ top: 10, right: 8, left: 0, bottom: 36 }}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} interval={0} angle={-36} textAnchor="end" height={44} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} />
          {tooltip}
          <Bar dataKey="inp" name="Input" fill={blue} radius={[2, 2, 0, 0]} />
          <Bar dataKey="out" name="Output" fill={amber} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: blue, label: "Input" },
          { color: amber, label: "Output" },
        ]}
      />
    </div>
  );
}

export function Chart10() {
  return (
    <div>
      <ChartBox>
        <BarChart data={julyCuts} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="label" tick={tick} axisLine={axisLine} tickLine={false} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} />
          {tooltip}
          <Bar dataKey="before" name="Before 7/30" fill={muted} radius={[2, 2, 0, 0]} />
          <Bar dataKey="after" name="Still listed 9/05" fill={red} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: muted, label: "Before 7/30" },
          { color: red, label: "Still listed 9/05" },
        ]}
      />
    </div>
  );
}

export function Chart11() {
  return (
    <div>
      <ChartBox>
        <BarChart data={gpuRental} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="sil" tick={tick} axisLine={axisLine} tickLine={false} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} />
          {tooltip}
          <Bar dataKey="hs" name="Hyperscaler" fill={blue} radius={[2, 2, 0, 0]} />
          <Bar dataKey="neo" name="Neocloud" fill={amber} radius={[2, 2, 0, 0]} />
          <Bar dataKey="mkt" name="Marketplace" fill={red} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: blue, label: "Hyperscaler" },
          { color: amber, label: "Neocloud" },
          { color: red, label: "Marketplace" },
        ]}
      />
    </div>
  );
}

export function Chart12() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div>
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
          NVIDIA guarantee book
        </p>
        <ChartBox height={148}>
          <BarChart
            data={nvdaGuarantees}
            layout="vertical"
            margin={{ top: 8, right: 12, left: 4, bottom: 8 }}
          >
            <CartesianGrid {...gridProps} horizontal={false} vertical />
            <XAxis type="number" tick={tick} axisLine={axisLine} tickLine={false} />
            <YAxis type="category" dataKey="short" tick={tick} axisLine={axisLine} tickLine={false} width={92} />
            {tooltipMoney()}
            <Bar dataKey="value" name="$ billions" radius={[0, 3, 3, 0]} barSize={16}>
              <Cell fill={blue} />
              <Cell fill={amber} />
            </Bar>
          </BarChart>
        </ChartBox>
      </div>
      <div>
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
          Last-gen rental, same day
        </p>
        <ChartBox height={148}>
          <BarChart
            data={h100Rental}
            layout="vertical"
            margin={{ top: 8, right: 12, left: 4, bottom: 8 }}
          >
            <CartesianGrid {...gridProps} horizontal={false} vertical />
            <XAxis type="number" tick={tick} axisLine={axisLine} tickLine={false} />
            <YAxis type="category" dataKey="short" tick={tick} axisLine={axisLine} tickLine={false} width={92} />
            {tooltip}
            <Bar dataKey="value" name="$ / GPU-hour" radius={[0, 3, 3, 0]} barSize={16}>
              <Cell fill={red} />
              <Cell fill={amber} />
              <Cell fill={blue} />
            </Bar>
          </BarChart>
        </ChartBox>
      </div>
    </div>
  );
}

export function Chart13() {
  const data = [...circularBook].reverse();
  return (
    <ChartBox height={Math.max(260, data.length * 26 + 20)}>
      <BarChart data={data} layout="vertical" margin={{ top: 8, right: 12, left: 2, bottom: 8 }}>
        <CartesianGrid {...gridProps} horizontal={false} vertical />
        <XAxis type="number" tick={tick} axisLine={axisLine} tickLine={false} />
        <YAxis type="category" dataKey="short" tick={tick} axisLine={axisLine} tickLine={false} width={108} />
        {tooltipMoney()}
        <Bar dataKey="value" name="$ billions" fill={amber} radius={[0, 3, 3, 0]} barSize={12} />
      </BarChart>
    </ChartBox>
  );
}

export function Chart14() {
  const data = cashRows.map((r) => ({
    name: r.name,
    capex: r.capex,
    ocf: r.ocf,
    fcf: r.fcf,
  }));
  return (
    <div>
      <ChartBox height={232}>
        <BarChart data={data} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={32} />
          <ReferenceLine y={0} stroke={muted} />
          {tooltipMoney()}
          <Bar dataKey="capex" name="Capex" fill={amber} radius={[2, 2, 0, 0]} />
          <Bar dataKey="ocf" name="OCF" fill={blue} radius={[2, 2, 0, 0]} />
          <Bar dataKey="fcf" name="FCF" fill={red} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: amber, label: "Capex" },
          { color: blue, label: "OCF" },
          { color: red, label: "FCF" },
        ]}
      />
    </div>
  );
}

export function Chart15() {
  const data = guideRevisions.map((r) => ({
    name: r.name,
    before: r.before,
    after: r.after,
  }));
  return (
    <div>
      <ChartBox height={216}>
        <BarChart data={data} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={32} domain={[110, 240]} />
          {tooltipMoney()}
          <Bar dataKey="before" name="Prior guide" fill={muted} radius={[2, 2, 0, 0]} />
          <Bar dataKey="after" name="July revision" fill={green} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: muted, label: "Prior guide" },
          { color: green, label: "July revision" },
        ]}
      />
    </div>
  );
}

export function Chart16() {
  const data = cashRows.map((r) => ({
    name: r.name,
    ratio: Number((r.capex / r.ocf).toFixed(2)),
  }));
  return (
    <ChartBox>
      <BarChart data={data} margin={chartMargin}>
        <CartesianGrid {...gridProps} />
        <XAxis dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} />
        <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} />
        <ReferenceLine y={1} stroke={muted} strokeDasharray="4 4" />
        {tooltip}
        <Bar dataKey="ratio" name="Capex / OCF" radius={[2, 2, 0, 0]}>
          {data.map((d) => (
            <Cell key={d.name} fill={d.ratio >= 1 ? red : d.ratio >= 0.9 ? amber : green} />
          ))}
        </Bar>
      </BarChart>
    </ChartBox>
  );
}

export function Chart17() {
  const tot = mag7.reduce((s, r) => s + r.weight, 0);
  return (
    <div>
      <ChartBox>
        <BarChart data={mag7} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} />
          {tooltip}
          <Bar dataKey="weight" name="SPY weight %" fill={blue} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ChartBox>
      <p className="mt-2 font-mono text-[11px] text-faint">Mag7 reconstruction {tot.toFixed(1)}%</p>
    </div>
  );
}

export function Chart18() {
  return (
    <div>
      <ChartBox height={200}>
        <BarChart data={equalWeight} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="label" tick={tick} axisLine={axisLine} tickLine={false} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} />
          {tooltip}
          <Bar dataKey="rsp" name="RSP equal-weight" fill={green} radius={[2, 2, 0, 0]} />
          <Bar dataKey="spy" name="SPY cap-weight" fill={blue} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: green, label: "RSP equal-weight" },
          { color: blue, label: "SPY cap-weight" },
        ]}
      />
    </div>
  );
}

export function Chart19() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div>
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
          CoreWeave equity
        </p>
        <ChartBox height={148}>
          <BarChart
            data={[
              { name: "52-week high", v: rimCredit.equityHigh },
              { name: "Close 9/04", v: rimCredit.equityClose },
            ]}
            margin={chartMargin}
          >
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} />
            <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={32} />
            {tooltip}
            <Bar dataKey="v" name="Share price" radius={[2, 2, 0, 0]}>
              <Cell fill={muted} />
              <Cell fill={red} />
            </Bar>
          </BarChart>
        </ChartBox>
      </div>
      <div>
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
          CDS path (secondary)
        </p>
        <ChartBox height={148}>
          <LineChart data={rimCredit.cds} margin={chartMargin}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="label" tick={tick} axisLine={axisLine} tickLine={false} />
            <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={32} />
            {tooltip}
            <Line type="monotone" dataKey="bp" name="5y CDS bp" stroke={amber} strokeWidth={2.2} dot={{ r: 3.5, fill: amber }} />
          </LineChart>
        </ChartBox>
      </div>
      <div>
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
          Debt stock
        </p>
        <ChartBox height={148}>
          <BarChart data={rimCredit.debt} margin={chartMargin}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="label" tick={tick} axisLine={axisLine} tickLine={false} />
            <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} />
            {tooltip}
            <Bar dataKey="bn" name="Debt $B" radius={[2, 2, 0, 0]}>
              <Cell fill={blue} />
              <Cell fill={amber} />
            </Bar>
          </BarChart>
        </ChartBox>
      </div>
    </div>
  );
}

export function Chart20() {
  return (
    <div className="grid grid-cols-1 gap-3">
      <div>
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
          NVIDIA Q2 FY27 mix
        </p>
        <ChartBox height={148}>
          <BarChart
            data={[
              { name: "Rest", v: Number((nvdaHub.total - nvdaHub.dataCenter).toFixed(2)) },
              { name: "Data Center", v: nvdaHub.dataCenter },
            ]}
            margin={chartMargin}
          >
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} />
            <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={32} />
            {tooltipMoney()}
            <Bar dataKey="v" name="Q2 FY27 $B" radius={[2, 2, 0, 0]}>
              <Cell fill={muted} />
              <Cell fill={green} />
            </Bar>
          </BarChart>
        </ChartBox>
      </div>
      <div>
        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-faint">
          Three direct customers
        </p>
        <ChartBox height={148}>
          <BarChart data={nvdaHub.customers} margin={chartMargin}>
            <CartesianGrid {...gridProps} />
            <XAxis dataKey="name" tick={tick} axisLine={axisLine} tickLine={false} />
            <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} />
            {tooltip}
            <Bar dataKey="pct" name="H1 FY27 %" fill={blue} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ChartBox>
      </div>
    </div>
  );
}

export function Chart21() {
  return (
    <div className="flex h-52 flex-col items-center justify-center rounded-lg bg-wash px-6 text-center shadow-[var(--shadow-border)]">
      <p className="font-display text-2xl text-ink">Not scored</p>
      <p className="mt-2 max-w-xs text-sm text-mute">
        Tokens sold and GPU utilization have no first-class primary print in this pack. A rate card is not utilization. A rental series is not volume.
      </p>
    </div>
  );
}
