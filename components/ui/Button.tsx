import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "burgundy" | "ink" | "paper" | "ghost-dark" | "ghost-light";

const variants: Record<Variant, string> = {
  burgundy:
    "bg-burgundy text-warm-white hover:bg-burgundy-active",
  ink: "bg-black text-warm-white hover:bg-warm-black",
  paper: "bg-warm-white text-black hover:bg-paper",
  "ghost-dark":
    "border border-warm-white/15 text-warm-white/80 hover:text-warm-white hover:border-warm-white/30",
  "ghost-light":
    "border border-black/20 text-black hover:bg-black hover:text-warm-white",
};

export default function Button({
  href,
  children,
  variant = "burgundy",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center min-h-11 px-6 md:px-8 text-[14px] md:text-[15px] font-semibold rounded-[4px] transition-colors duration-200 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
