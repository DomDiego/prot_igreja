import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Culto de Celebração",
    date: "Domingo, 27 Out",
    time: "10:00",
    location: "Templo Principal",
    color: "primary",
  },
  {
    id: 2,
    title: "Escola Bíblica Dominical",
    date: "Domingo, 27 Out",
    time: "09:00",
    location: "Salas de Aula",
    color: "chart-2",
  },
  {
    id: 3,
    title: "Reunião de Oração",
    date: "Quarta-feira, 30 Out",
    time: "19:30",
    location: "Capela",
    color: "chart-3",
  },
  {
    id: 4,
    title: "Grupo de Jovens",
    date: "Sexta-feira, 1 Nov",
    time: "19:00",
    location: "Salão de Eventos",
    color: "chart-4",
  },
];

export default function Events() {
  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Próximos Eventos
        </h2>
        <p className="text-sm text-muted-foreground">
          Participe das atividades da nossa comunidade
        </p>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <Card
            key={event.id}
            className="p-6 hover-elevate active-elevate-2 cursor-pointer"
            data-testid={`card-event-${event.id}`}
          >
            <div className="flex gap-4">
              <div className={`w-12 h-12 rounded-xl bg-${event.color}/10 flex items-center justify-center flex-shrink-0`}>
                <Calendar className={`w-6 h-6 text-${event.color}`} />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-display font-medium text-foreground">
                  {event.title}
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
