import { Card } from "@/components/ui/card";
import { Share2 } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "Vídeo" }: YouTubeEmbedProps) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: "Confira essa mensagem do app Igreja Comunidade",
          url: videoUrl,
        });
        console.log("Compartilhado com sucesso!");
      } catch (err) {
        console.error("Erro ao compartilhar:", err);
      }
    } else {
      // fallback para copiar link se o Web Share não estiver disponível
      navigator.clipboard.writeText(videoUrl);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="space-y-3" data-testid="youtube-container">
      {title && (
        <h2 className="text-lg font-display font-medium text-foreground">
          {title}
        </h2>
      )}

      <Card className="overflow-hidden rounded-2xl shadow-lg p-0">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            data-testid="youtube-iframe"
          />
        </div>
      </Card>

      <div className="flex justify-center">
        <button
          onClick={handleShare}
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-primary text-background font-medium rounded-lg shadow-md hover:bg-primary/90 transition-colors"
        >
          <Share2 className="w-5 h-5" />
          Compartilhar
        </button>
      </div>
    </div>
  );
}
