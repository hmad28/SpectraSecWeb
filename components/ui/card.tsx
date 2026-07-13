import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-200 ease-out hover:-translate-y-1 hover:border-violet-300/35 hover:bg-white/[0.075] hover:shadow-[0_0_40px_rgba(139,92,246,0.16)]",
        className,
      )}
      {...props}
    />
  );
}
