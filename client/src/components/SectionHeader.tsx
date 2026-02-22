import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ label, title, description, className, light = false }: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 max-w-3xl", className)}>
      {label && (
        <span className={cn(
          "uppercase tracking-widest text-xs font-bold",
          light ? "text-white/70" : "text-accent"
        )}>
          {label}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight",
        light ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg leading-relaxed",
          light ? "text-white/70" : "text-muted-foreground"
        )}>
          {description}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 mt-6",
        light ? "bg-white/30" : "bg-primary"
      )} />
    </div>
  );
}
