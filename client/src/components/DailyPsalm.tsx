import { Card } from "@/components/ui/card";

interface DailyPsalmProps {
  psalm: string;
  verse: string;
  text: string;
}

export default function DailyPsalm({ psalm, verse, text }: DailyPsalmProps) {
  return (
    <Card className="p-6 rounded-2xl shadow-lg" data-testid="card-daily-psalm">
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-xs font-medium uppercase tracking-wide text-primary">
            {psalm}
          </span>
        </div>
        <p className="text-base leading-relaxed text-foreground font-serif italic">
          "{text}"
        </p>
        <p className="text-sm text-muted-foreground italic">
          {verse}
        </p>
      </div>
    </Card>
  );
}
