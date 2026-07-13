import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-none border px-5 py-3 text-sm font-bold no-underline transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300",
        "will-change-transform hover:-translate-y-0.5 active:translate-y-px",
        variant === "primary" &&
          "border-violet-300/70 bg-violet-500 text-white shadow-[0_0_28px_rgba(139,92,246,0.25)] hover:border-fuchsia-300 hover:bg-fuchsia-500 hover:shadow-[0_0_36px_rgba(168,85,247,0.4)]",
        variant === "secondary" &&
          "border-white/14 bg-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-[0_0_32px_rgba(34,211,238,0.18)]",
        variant === "ghost" &&
          "border-transparent bg-transparent text-zinc-300 hover:border-white/12 hover:bg-white/7 hover:text-white",
        className,
      )}
      {...props}
    />
  );
}
