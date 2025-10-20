import { Card } from "@/components/ui/card";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({ videoId, title = "Vídeo" }: YouTubeEmbedProps) {
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
    </div>
  );
}
