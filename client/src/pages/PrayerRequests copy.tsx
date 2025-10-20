import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const recentPrayers = [
  { id: 1, name: "Maria S.", request: "Oração pela saúde da minha mãe", time: "2h atrás" },
  { id: 2, name: "João P.", request: "Pedindo sabedoria para decisões importantes", time: "5h atrás" },
  { id: 3, name: "Ana L.", request: "Gratidão pela nova oportunidade de trabalho", time: "1d atrás" },
];

export default function PrayerRequests() {
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && request) {
      toast({
        title: "Pedido enviado!",
        description: "Vamos orar por você. Que Deus te abençoe!",
      });
      setName("");
      setRequest("");
    }
  };

  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Pedidos de Oração
        </h2>
        <p className="text-sm text-muted-foreground">
          Compartilhe seu pedido e ore pelos outros
        </p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Seu nome
            </label>
            <Input
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              data-testid="input-prayer-name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Seu pedido
            </label>
            <Textarea
              placeholder="Compartilhe seu pedido de oração..."
              value={request}
              onChange={(e) => setRequest(e.target.value)}
              rows={4}
              data-testid="textarea-prayer-request"
            />
          </div>
          <Button type="submit" className="w-full" data-testid="button-submit-prayer">
            <Send className="w-4 h-4 mr-2" />
            Enviar Pedido
          </Button>
        </form>
      </Card>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Pedidos Recentes
        </h3>
        {recentPrayers.map((prayer) => (
          <Card
            key={prayer.id}
            className="p-4 hover-elevate"
            data-testid={`card-prayer-${prayer.id}`}
          >
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {prayer.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {prayer.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {prayer.request}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
