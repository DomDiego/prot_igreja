import DailyProverb from "@/components/DailyProverb";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Home() {
  const currentHour = new Date().getHours();
  let greeting = "Boa noite";
  if (currentHour < 12) greeting = "Bom dia";
  else if (currentHour < 18) greeting = "Boa tarde";

  return (
    <div className="space-y-6 pb-6">
      {/* Saudação */}
      <div className="space-y-2 text-center">
        <h2
          className="text-2xl font-display font-semibold text-foreground"
          data-testid="text-greeting"
        >
          {greeting}!
        </h2>
        <p className="text-sm text-muted-foreground">
          Que a paz do Senhor esteja com você hoje
        </p>
      </div>

      {/* Container da Mensagem do Dia + Vídeo */}
      <div className="space-y-4">
        <DailyProverb
          reference="Mensagem do Dia"
          verse="Provérbios 3:5-6"
          text="Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas."
        />

        <YouTubeEmbed
          videoId="2_0eydcXo4g"
          title=""  // título removido
        />
      </div>
    </div>
  );
}
