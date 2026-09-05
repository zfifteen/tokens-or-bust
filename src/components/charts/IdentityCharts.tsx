import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  AreaChart,
  Area,
} from "recharts";
import {
  ChartBox,
  SeriesLegend,
  tick,
  axisLine,
  gridProps,
  chartMargin,
  tooltipMoney,
  tooltip,
} from "./theme";
import {
  computePaths,
  breakEvenSeries,
  mixShift,
  gpuHour,
  volumeGrid,
  profitAtVolume,
  regimes,
} from "@/lib/identity";
import type { Knobs } from "@/lib/knobs";
import { green, amber, red, blue, muted } from "@/lib/palette";
import { tickMoney } from "@/lib/utils";

const yAxis = {
  tickFormatter: tickMoney,
  tick,
  axisLine,
  tickLine: false as const,
  width: 48,
  tickCount: 4,
  minTickGap: 18,
};

export function Chart01({ knobs }: { knobs: Knobs }) {
  const { A, B, C } = computePaths(knobs);
  const data = A.map((_, i) => ({
    m: i,
    A: A[i].rev,
    B: B[i].rev,
    C: C[i].rev,
  }));
  return (
    <div>
      <ChartBox>
        <LineChart data={data} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="m" tick={tick} axisLine={axisLine} tickLine={false} minTickGap={16} />
          <YAxis {...yAxis} />
          {tooltipMoney()}
          <Line type="monotone" dataKey="A" name="A together" stroke={green} strokeWidth={2.2} dot={false} />
          <Line type="monotone" dataKey="B" name="B floor" stroke={amber} strokeWidth={2.2} dot={false} />
          <Line type="monotone" dataKey="C" name="C price war" stroke={red} strokeWidth={2.4} dot={false} />
        </LineChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: green, label: "A together" },
          { color: amber, label: "B floor" },
          { color: red, label: "C price war" },
        ]}
      />
    </div>
  );
}

export function Chart02({ knobs }: { knobs: Knobs }) {
  const V = volumeGrid();
  const regs = regimes(knobs);
  const data = V.map((v) => {
    const row: Record<string, number> = { v: v / 1e6 };
    for (const r of regs) {
      row[r.key] = profitAtVolume(r.P, r.Cv, v, knobs.F);
    }
    return row;
  });
  return (
    <div>
      <ChartBox>
        <LineChart data={data} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="v" tick={tick} axisLine={axisLine} tickLine={false} minTickGap={16} />
          <YAxis {...yAxis} />
          <ReferenceLine y={0} stroke={muted} strokeDasharray="3 3" />
          {tooltipMoney()}
          <Line type="monotone" dataKey="A" name="volume helps" stroke={green} strokeWidth={2.4} dot={false} />
          <Line type="monotone" dataKey="B" name="thin margin" stroke={amber} strokeWidth={2.4} dot={false} />
          <Line type="monotone" dataKey="C" name="volume hurts" stroke={red} strokeWidth={2.4} dot={false} />
        </LineChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: green, label: "volume helps" },
          { color: amber, label: "thin margin" },
          { color: red, label: "volume hurts" },
        ]}
      />
    </div>
  );
}

export function Chart03({ knobs }: { knobs: Knobs }) {
  return <Chart02 knobs={knobs} />;
}

export function Chart04({ knobs }: { knobs: Knobs }) {
  const data = breakEvenSeries(knobs).map((d) => ({
    P: Number(d.P.toFixed(2)),
    Vbe: d.Vbe,
  }));
  return (
    <div>
      <ChartBox>
        <AreaChart data={data} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="P" tick={tick} axisLine={axisLine} tickLine={false} minTickGap={16} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={28} domain={[0, 12]} tickCount={4} />
          <ReferenceLine x={knobs.cvBe} stroke={red} strokeDasharray="4 4" />
          {tooltip}
          <Area
            type="monotone"
            dataKey="Vbe"
            name="Tokens to cover F"
            stroke={amber}
            fill={amber}
            fillOpacity={0.15}
            strokeWidth={2.2}
            connectNulls={false}
          />
        </AreaChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: amber, label: "tokens to cover F" },
          { color: red, label: `Cv = $${knobs.cvBe.toFixed(2)}` },
        ]}
      />
    </div>
  );
}

export function Chart05({ knobs }: { knobs: Knobs }) {
  const { C } = computePaths(knobs);
  const data = C.map((p) => ({
    m: p.m,
    volume: p.V / 1e6,
    rev: p.rev,
    profit: p.profit,
    F: knobs.F,
  }));
  return (
    <div>
      <ChartBox>
        <LineChart data={data} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="m" tick={tick} axisLine={axisLine} tickLine={false} minTickGap={16} />
          <YAxis yAxisId="l" tick={tick} axisLine={axisLine} tickLine={false} width={28} tickCount={4} />
          <YAxis yAxisId="r" orientation="right" {...yAxis} width={44} />
          {tooltipMoney()}
          <Line yAxisId="l" type="monotone" dataKey="volume" name="Volume" stroke={blue} strokeWidth={2} dot={false} />
          <Line yAxisId="r" type="monotone" dataKey="rev" name="Revenue" stroke={green} strokeWidth={2} dot={false} />
          <Line yAxisId="r" type="monotone" dataKey="F" name="Fixed cost" stroke={muted} strokeDasharray="4 4" strokeWidth={1.6} dot={false} />
          <Line yAxisId="r" type="monotone" dataKey="profit" name="Profit" stroke={red} strokeWidth={2.4} dot={false} />
        </LineChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: blue, label: "Volume" },
          { color: green, label: "Revenue" },
          { color: muted, label: "Fixed cost" },
          { color: red, label: "Profit" },
        ]}
      />
    </div>
  );
}

export function Chart06({ knobs }: { knobs: Knobs }) {
  const { C } = computePaths(knobs);
  const rows = gpuHour(knobs, C);
  const data = rows.map((r) => ({
    m: r.m,
    rev: r.revPerHour,
    cost: r.cost,
  }));
  return (
    <div>
      <ChartBox>
        <LineChart data={data} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="m" tick={tick} axisLine={axisLine} tickLine={false} minTickGap={16} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={36} tickCount={4} minTickGap={18} />
          {tooltip}
          <Line type="monotone" dataKey="rev" name="$ / GPU-hour" stroke={blue} strokeWidth={2.4} dot={false} />
          <Line type="monotone" dataKey="cost" name="Committed cost" stroke={red} strokeDasharray="4 4" strokeWidth={1.8} dot={false} />
        </LineChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: blue, label: "$ / GPU-hour" },
          { color: red, label: "Committed cost" },
        ]}
      />
    </div>
  );
}

export function Chart07({ knobs }: { knobs: Knobs }) {
  const data = mixShift(knobs);
  return (
    <div>
      <ChartBox>
        <LineChart data={data} margin={chartMargin}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="m" tick={tick} axisLine={axisLine} tickLine={false} minTickGap={16} />
          <YAxis tick={tick} axisLine={axisLine} tickLine={false} width={32} tickCount={4} minTickGap={18} />
          {tooltip}
          <Line type="monotone" dataKey="flagship" name="Flagship list" stroke={green} strokeWidth={2.2} dot={false} />
          <Line type="monotone" dataKey="budget" name="Budget model" stroke={amber} strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="blended" name="Blended P" stroke={red} strokeWidth={2.4} dot={false} />
        </LineChart>
      </ChartBox>
      <SeriesLegend
        items={[
          { color: green, label: "Flagship list" },
          { color: amber, label: "Budget model" },
          { color: red, label: "Blended P" },
        ]}
      />
    </div>
  );
}
