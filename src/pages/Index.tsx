import { useState, useEffect, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Search, Sparkles, Filter, TrendingUp, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  id: string;
  title_ms: string;
  summary_ms: string;
  price: number;
  image_url: string | null;
  product_link: string;
  trending_score: number;
  is_free: boolean;
  category_ms: string | null;
  created_at: string;
}

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"trending" | "newest">("trending");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("trending_score", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title_ms.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.summary_ms.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category_ms?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "trending") {
        return b.trending_score - a.trending_score;
      } else {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
    });

    return sorted;
  }, [products, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Platform AI Tempatan Malaysia
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                PengulasAI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Sumber digital dan panduan AI terbaik untuk usahawan dan content creator Malaysia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-xl"
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Terokai Produk
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 hover:border-primary/50 text-lg px-8 py-6 rounded-xl"
                asChild
              >
                <a href="mailto:aaautomate123@gmail.com">
                  Hubungi Kami
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search and Filter */}
            <div className="mb-12 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Cari produk, kategori..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-base rounded-xl border-border/50 bg-card/50 backdrop-blur-sm"
                  />
                </div>
                
                <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                  <SelectTrigger className="w-full md:w-[200px] h-12 rounded-xl border-border/50 bg-card/50 backdrop-blur-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trending">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span>Paling Popular</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="newest">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Terkini</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="mt-4 text-muted-foreground">Memuatkan produk...</p>
              </div>
            ) : filteredAndSortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Tiada produk dijumpai. Cuba carian yang berbeza.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title_ms}
                    summary={product.summary_ms}
                    price={product.price}
                    imageUrl={product.image_url || undefined}
                    productLink={product.product_link}
                    isFree={product.is_free}
                    category={product.category_ms || undefined}
                    trendingScore={product.trending_score}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  PengulasAI
                </h3>
                <p className="text-sm text-muted-foreground">
                  © 2025 PengulasAI.com. Hak cipta terpelihara.
                </p>
              </div>
              
              <div className="flex gap-6">
                <Link to="/privacy-policy">
                  <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                    Dasar Privasi
                  </Button>
                </Link>
                <Link to="/terms">
                  <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                    Terma Perkhidmatan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
