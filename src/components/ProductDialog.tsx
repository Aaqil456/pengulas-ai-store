import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ShoppingCart, TrendingUp, ExternalLink } from "lucide-react";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    title_ms: string;
    summary_ms: string;
    price: number;
    image_url: string | null;
    product_link: string;
    is_free: boolean;
    category_ms: string | null;
    trending_score: number;
  } | null;
  onProductClick?: (productId: string) => void; // New prop
}

export function ProductDialog({ open, onOpenChange, product, onProductClick }: ProductDialogProps) {
  if (!product) return null;

  const isTrending = product.trending_score >= 90;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Product Image */}
        {product.image_url ? (
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg mb-4 -mt-2">
            <img
              src={product.image_url}
              alt={product.title_ms}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative w-full pb-[56.25%] bg-gradient-primary/20 rounded-lg mb-4 flex items-center justify-center -mt-2">
            <ShoppingCart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-primary" />
          </div>
        )}

        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-2xl font-bold text-left">
              {product.title_ms}
            </DialogTitle>
            {isTrending && (
              <Badge variant="secondary" className="bg-gradient-primary text-white border-0 gap-1 flex-shrink-0">
                <TrendingUp className="h-3 w-3" />
                Popular
              </Badge>
            )}
          </div>
          
          {/* Category */}
          {product.category_ms && (
            <Badge variant="outline" className="w-fit bg-accent/50 border-primary/20 text-accent-foreground">
              {product.category_ms}
            </Badge>
          )}
        </DialogHeader>

        {/* Product Description */}
        <DialogDescription className="text-left text-base leading-relaxed text-foreground">
          {product.summary_ms}
        </DialogDescription>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-6 border-t border-border/50 mt-4">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground mb-1">Harga</span>
            <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {product.is_free ? "Percuma" : `RM${product.price.toFixed(2)}`}
            </span>
          </div>
          
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            asChild
            onClick={() => onProductClick?.(product.id)} // Call onProductClick here
          >
            <a href={product.product_link} target="_blank" rel="noopener noreferrer">
              {product.is_free ? (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Muat Turun
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Beli Sekarang
                </>
              )}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
