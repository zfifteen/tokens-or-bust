import { ClientOnly } from "./ClientOnly";
import { useKnobs } from "@/lib/knobs";
import {
  Chart01,
  Chart02,
  Chart03,
  Chart04,
  Chart05,
  Chart06,
  Chart07,
} from "./charts/IdentityCharts";
import {
  Chart08,
  Chart09,
  Chart10,
  Chart11,
  Chart12,
  Chart13,
  Chart14,
  Chart15,
  Chart16,
  Chart17,
  Chart18,
  Chart19,
  Chart20,
  Chart21,
} from "./charts/MeasuredCharts";

export function FigureChart({ id }: { id: string }) {
  const knobs = useKnobs((s) => s.knobs);
  return (
    <ClientOnly>
      {id === "01" && <Chart01 knobs={knobs} />}
      {id === "02" && <Chart02 knobs={knobs} />}
      {id === "03" && <Chart03 knobs={knobs} />}
      {id === "04" && <Chart04 knobs={knobs} />}
      {id === "05" && <Chart05 knobs={knobs} />}
      {id === "06" && <Chart06 knobs={knobs} />}
      {id === "07" && <Chart07 knobs={knobs} />}
      {id === "08" && <Chart08 />}
      {id === "09" && <Chart09 />}
      {id === "10" && <Chart10 />}
      {id === "11" && <Chart11 />}
      {id === "12" && <Chart12 />}
      {id === "13" && <Chart13 />}
      {id === "14" && <Chart14 />}
      {id === "15" && <Chart15 />}
      {id === "16" && <Chart16 />}
      {id === "17" && <Chart17 />}
      {id === "18" && <Chart18 />}
      {id === "19" && <Chart19 />}
      {id === "20" && <Chart20 />}
      {id === "21" && <Chart21 />}
    </ClientOnly>
  );
}
