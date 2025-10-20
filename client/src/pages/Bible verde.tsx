import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Book, CheckCircle2 } from "lucide-react";

const bibleBooks = [
  "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio",
  "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel",
  "Salmos", "Provérbios", "Eclesiastes", "Cantares", "Isaías",
  "Mateus", "Marcos", "Lucas", "João", "Atos",
];

const TOTAL_STEPS = 6; // número de círculos por card

export default function Bible() {
  const [readBooks, setReadBooks] = useState<Record<string, number>>({});

  useEffect(() => {
    const randomProgress: Record<string, number> = {};
    bibleBooks.forEach((book) => {
      randomProgress[book] = Math.floor(Math.random() * TOTAL_STEPS); // 0 a 5
    });
    setReadBooks(randomProgress);
  }, []);

  const totalProgress = Math.round(
    (Object.values(readBooks).reduce((a, b) => a + b, 0) / (bibleBooks.length * (TOTAL_STEPS - 1))) * 100
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
            <span className="text-sm font-medium text-emerald-500">{totalProgress}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded overflow-hidden">
            <div className="h-2 bg-emerald-500" style={{ width: `${totalProgress}%` }}></div>
          </div>
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
                className="p-4 cursor-pointer hover-elevate active-elevate-2 transition flex flex-col gap-2"
                data-testid={`card-book-${book}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${bookProgress > 0 ? "text-emerald-700" : "text-foreground"}`}>
                    {book}
                  </span>
                  {bookProgress === TOTAL_STEPS - 1 && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                </div>

                {/* Linha de evolução com círculos verdes */}
                <div className="flex gap-1 mt-2">
                  {Array.from({ length: TOTAL_STEPS }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full ${index <= bookProgress ? "bg-emerald-500" : "bg-gray-200"}`}
                    ></div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
