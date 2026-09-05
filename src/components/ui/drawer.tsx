import * as React from "react";
import { Drawer as Vaul } from "vaul";
import { cn } from "@/lib/utils";

export const Drawer = Vaul.Root;
export const DrawerTrigger = Vaul.Trigger;
export const DrawerClose = Vaul.Close;
export const DrawerPortal = Vaul.Portal;

export function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof Vaul.Overlay>) {
  return (
    <Vaul.Overlay
      className={cn("fixed inset-0 z-40 bg-canvas/70", className)}
      {...props}
    />
  );
}

export function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Vaul.Content>) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <Vaul.Content
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex max-h-[88dvh] flex-col rounded-t-2xl bg-panel pb-[env(safe-area-inset-bottom)] shadow-[var(--shadow-border)]",
          className,
        )}
        {...props}
      >
        <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-hair" />
        {children}
      </Vaul.Content>
    </DrawerPortal>
  );
}

export function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof Vaul.Title>) {
  return (
    <Vaul.Title
      className={cn("font-display text-xl text-ink", className)}
      {...props}
    />
  );
}

export function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof Vaul.Description>) {
  return (
    <Vaul.Description
      className={cn("text-sm text-mute", className)}
      {...props}
    />
  );
}
