import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Book, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Lista de livros
const bibleBooks = [
  "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio",
  "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel",
  "Salmos", "Provérbios", "Eclesiastes", "Cantares", "Isaías",
  "Mateus", "Marcos", "Lucas", "João", "Atos",
];

// Função para definir cor do card de acordo com progresso
function getCardColor(progress: number) {
  if (progress === 0) return "bg-primary/10";
  if (progress === 1) return "bg-primary/30";
  if (progress === 2) return "bg-primary/50";
  if (progress === 3) return "bg-primary/70";
  return "bg-primary"; // 4 ou 5
}

export default function Bible() {
  // Progresso de cada livro (0 a 5)
  const [readBooks, setReadBooks] = useState<Record<string, number>>({});

  // Simula progresso aleatório ao carregar a página
  useEffect(() => {
    const randomProgress: Record<string, number> = {};
    bibleBooks.forEach((book) => {
      randomProgress[book] = Math.floor(Math.random() * 6); // 0 a 5
    });
    setReadBooks(randomProgress);
  }, []);

  // Progresso geral
  const totalProgress = Math.round(
    (Object.values(readBooks).reduce((a, b) => a + b, 0) /
      (bibleBooks.length * 5)) *
      100
  );

  return (
    <div className="space-y-6 pb-6">
      {/* Cabeçalho */}
      <div className="space-y-4">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Bíblia Sagrada
        </h2>

        {/* Barra de progresso geral */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">Progresso geral</span>
            <span className="text-sm font-medium text-primary">{totalProgress}%</span>
          </div>
          <Progress value={totalProgress} className="h-2" />
        </div>

        {/* Busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar versículo ou livro..."
            className="pl-10"
            data-testid="input-bible-search"
          />
        </div>
      </div>

      {/* Lista de livros */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Livros da Bíblia
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {bibleBooks.map((book) => {
            const bookProgress = readBooks[book] || 0;
            return (
              <Card
                key={book}
                className={`p-4 cursor-pointer hover-elevate active-elevate-2 transition flex items-center gap-3 ${getCardColor(bookProgress)}`}
                data-testid={`card-book-${book}`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {bookProgress === 5 ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <Book className="w-5 h-5 text-white" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground flex-1 break-words">
                  {book}
                </span>
                {bookProgress > 0 && (
                  <span className="text-xs font-semibold text-white">
                    {Math.round((bookProgress / 5) * 100)}%
                  </span>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
