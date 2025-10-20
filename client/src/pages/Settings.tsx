import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Volume2, Globe, Info, Mail } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Configurações
        </h2>
        <p className="text-sm text-muted-foreground">
          Personalize sua experiência no app
        </p>
      </div>

      <div className="space-y-4">
        <Card className="divide-y divide-border">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Notificações</p>
                <p className="text-xs text-muted-foreground">Receber alertas de eventos</p>
              </div>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
              data-testid="switch-notifications"
            />
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-chart-2" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Sons</p>
                <p className="text-xs text-muted-foreground">Sons de notificação</p>
              </div>
            </div>
            <Switch
              checked={sound}
              onCheckedChange={setSound}
              data-testid="switch-sound"
            />
          </div>
        </Card>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Informações
          </h3>
          
          <Card className="p-4 hover-elevate active-elevate-2 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-chart-3" />
              </div>
              <span className="text-sm font-medium text-foreground">Idioma</span>
            </div>
          </Card>

          <Card className="p-4 hover-elevate active-elevate-2 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-chart-4/10 flex items-center justify-center">
                <Info className="w-5 h-5 text-chart-4" />
              </div>
              <span className="text-sm font-medium text-foreground">Sobre o App</span>
            </div>
          </Card>

          <Card className="p-4 hover-elevate active-elevate-2 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-chart-5/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-chart-5" />
              </div>
              <span className="text-sm font-medium text-foreground">Contato</span>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="space-y-3 text-center">
            <h3 className="font-display font-medium text-foreground">
              Igreja Comunidade
            </h3>
            <p className="text-sm text-muted-foreground">
              Versão 1.0.0
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 Todos os direitos reservados
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
