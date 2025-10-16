import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ShoppingCart, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  summary: string;
  price: number;
  imageUrl?: string;
  productLink: string;
  isFree: boolean;
  category?: string;
  trendingScore: number;
  className?: string;
  onClick?: () => void;
}

export function ProductCard({
  title,
  summary,
  price,
  imageUrl,
  productLink,
  isFree,
  category,
  trendingScore,
  className,
  onClick,
}: ProductCardProps) {
  const isTrending = trendingScore >= 90;
  
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden bg-gradient-card p-6 transition-all duration-300",
        "hover:shadow-card-hover hover:-translate-y-1 cursor-pointer",
        "border border-border/50",
        className
      )}
      onClick={onClick}
    >
      {/* Trending badge */}
      {isTrending && (
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-gradient-primary text-white border-0 gap-1">
            <TrendingUp className="h-3 w-3" />
            Popular
          </Badge>
        </div>
      )}

      {/* Category badge */}
      {category && (
        <Badge variant="outline" className="mb-3 bg-accent/50 border-primary/20 text-accent-foreground">
          {category}
        </Badge>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Summary */}
      <p className="text-muted-foreground text-sm mb-6 line-clamp-4 leading-relaxed">
        {summary}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground mb-1">Harga</span>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {isFree ? "Percuma" : `RM${price.toFixed(2)}`}
          </span>
        </div>
        
        <Button
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          {isFree ? (
            <>
              <Download className="mr-2 h-4 w-4" />
              Lihat Produk
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Lihat Produk
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
