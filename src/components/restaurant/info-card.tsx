import { type ReactNode } from "react";

interface InfoCardProps {
  title: ReactNode;
  children: ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-xl bg-card p-7 text-center shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-foreground">{title}</h3>
      <div className="space-y-1 text-foreground/80">{children}</div>
    </div>
  );
}
