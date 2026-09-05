import type { ReactNode } from "react";
import { GLOSSARY } from "@/lib/hypotheses";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function GlossarySheet({ children }: { children: ReactNode }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="overflow-y-auto px-5 pb-8 pt-4">
          <DrawerTitle>How to read the formula</DrawerTitle>
          <DrawerDescription className="mt-1">
            Profit = (P − Cv) · V − F
          </DrawerDescription>
          <dl className="mt-5 space-y-4">
            {GLOSSARY.map((g) => (
              <div key={g.dt}>
                <dt className="font-mono text-sm text-brass">{g.dt}</dt>
                <dd className="mt-1 text-sm text-mute">{g.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
