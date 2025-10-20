import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Book } from "lucide-react";

const bibleBooks = [
  "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio",
  "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel",
  "Salmos", "Provérbios", "Eclesiastes", "Cantares", "Isaías",
  "Mateus", "Marcos", "Lucas", "João", "Atos",
];

export default function Bible() {
  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-display font-semibold text-foreground">
          Bíblia Sagrada
        </h2>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Buscar versículo ou livro..."
            className="pl-10"
            data-testid="input-bible-search"
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Livros da Bíblia
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {bibleBooks.map((book) => (
            <Card
              key={book}
              className="p-4 hover-elevate active-elevate-2 cursor-pointer"
              data-testid={`card-book-${book}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Book className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{book}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
