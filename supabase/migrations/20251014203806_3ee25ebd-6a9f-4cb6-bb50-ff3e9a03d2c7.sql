-- Create products table for digital products
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ms TEXT NOT NULL,
  summary_ms TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL DEFAULT 0,
  image_url TEXT,
  product_link TEXT NOT NULL,
  trending_score INTEGER NOT NULL DEFAULT 0,
  is_free BOOLEAN NOT NULL DEFAULT false,
  category_ms TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (no auth required)
CREATE POLICY "Products are viewable by everyone"
ON public.products
FOR SELECT
USING (true);

-- Create index for faster queries
CREATE INDEX idx_products_trending ON public.products(trending_score DESC);
CREATE INDEX idx_products_created ON public.products(created_at DESC);

-- Insert sample products based on user's existing products
INSERT INTO public.products (title_ms, summary_ms, price, image_url, product_link, trending_score, is_free, category_ms) VALUES
('Kopi Bot AI Agent', 'Fail JSON ini adalah blueprint AI Assistant untuk sistem tempahan minuman seperti chatbot café. Sesuai digunakan untuk membuat voice AI agent bagi service F&B.', 0, null, 'https://pengulasai.com/files/kopi-bot.json', 100, true, 'AI Agent'),
('Dari Skrip Jadi Video', 'Ebook ini adalah panduan praktikal dan lengkap untuk anda yang nak hasilkan video TikTok AI tanpa perlu tunjuk muka, suara sendiri, atau skill editing yang tinggi. Dalam buku ini, anda akan belajar cara buat avatar AI bercakap, tulis skrip guna ChatGPT, hasilkan suara robotik guna Clipchamp, dan edit semua itu dalam CapCut dengan langkah yang mudah diikuti.', 39.00, null, 'https://toyyibpay.com/Dari-Skrip-Jadi-Video-AI', 95, false, 'Ebook');