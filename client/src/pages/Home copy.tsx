import DailyPsalm from "@/components/DailyPsalm";
import DailyProverb from "@/components/DailyProverb";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Home() {
  const currentHour = new Date().getHours();
  let greeting = "Boa noite";
  if (currentHour < 12) greeting = "Bom dia";
  else if (currentHour < 18) greeting = "Boa tarde";

  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-display font-semibold text-foreground" data-testid="text-greeting">
          {greeting}!
        </h2>
        <p className="text-sm text-muted-foreground">
          Que a paz do Senhor esteja com você hoje
        </p>
      </div>

      <DailyPsalm
        psalm="Salmo 23"
        verse="Salmos 23:1-3"
        text="O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas. Refrigera a minha alma."
      />

      <DailyProverb
        reference="Provérbio do Dia"
        verse="Provérbios 3:5-6"
        text="Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas."
      />

      <YouTubeEmbed
        videoId="2_0eydcXo4g"
        title="Mensagem da Semana"
      />
    </div>
  );
}
