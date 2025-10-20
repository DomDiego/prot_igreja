import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Book, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const bibleBooks = [
  "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio",
  "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel",
  "Salmos", "Provérbios", "Eclesiastes", "Cantares", "Isaías",
  "Mateus", "Marcos", "Lucas", "João", "Atos",
];

export default function Bible() {
  const [readBooks, setReadBooks] = useState<string[]>([]);

  // Simula livros lidos aleatoriamente ao carregar a página
  useEffect(() => {
    const randomRead = bibleBooks.filter(() => Math.random() < 0.4); // 40% lidos
    setReadBooks(randomRead);
  }, []);

  const progress = Math.round((readBooks.length / bibleBooks.length) * 100);

  return (
    <div className="space-y-6 pb-6">
      {/* Cabeçalho */}
      <div className="space-y-4">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Bíblia Sagrada
        </h2>

        {/* Barra de progresso */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-muted-foreground">Progresso</span>
            <span className="text-sm font-medium text-primary">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
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
        <div className="grid grid-cols-2 gap-3">
          {bibleBooks.map((book) => {
            const isRead = readBooks.includes(book);
            return (
              <Card
                key={book}
                className={`p-4 cursor-pointer hover-elevate active-elevate-2 transition 
                  ${isRead ? "border-primary/40" : ""}`}
                data-testid={`card-book-${book}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 
                    ${isRead ? "bg-primary/20" : "bg-primary/10"}`}>
                    {isRead ? (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    ) : (
                      <Book className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground flex-1">
                    {book}
                  </span>
                  {isRead && (
                    <span className="text-xs text-primary font-semibold">
                      Lido
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
