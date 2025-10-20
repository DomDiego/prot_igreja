import { Card } from "@/components/ui/card";

interface DailyProverbProps {
  reference: string;
  text: string;
  verse: string;
}

export default function DailyProverb({ reference, text, verse }: DailyProverbProps) {
  return (
    <Card className="p-6 rounded-2xl shadow-lg" data-testid="card-daily-proverb">
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-chart-2/10 border border-chart-2/20">
          <span className="text-xs font-medium uppercase tracking-wide text-chart-2">
            {reference}
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
