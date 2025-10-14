import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Laman Utama
          </Button>
        </Link>

        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Terma Perkhidmatan
          </h1>
          <p className="text-muted-foreground mb-8">Dikemas kini: 1 Julai 2025</p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              1. Persetujuan kepada Terma
            </h2>
            <p className="text-foreground mb-6">
              Dengan mengakses atau menggunakan <strong>PengulasAI.com</strong>, anda bersetuju untuk terikat dengan Terma Perkhidmatan ini dan Dasar Privasi kami. Jika anda tidak bersetuju, sila jangan gunakan laman atau perkhidmatan kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              2. Produk dan Pesanan
            </h2>
            <ul className="list-disc pl-6 mb-6 text-foreground space-y-2">
              <li>Kami menjual produk digital dan/atau fizikal secara dalam talian. Semua harga dan ketersediaan adalah tertakluk kepada perubahan.</li>
              <li>Sebaik sahaja pembayaran selesai, anda akan menerima akses kepada produk digital anda atau pengesahan penghantaran untuk barangan fizikal.</li>
              <li>Jualan semula atau pengedaran produk kami tanpa kebenaran adalah dilarang sama sekali.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              3. Log Masuk Facebook dan Integrasi Aplikasi
            </h2>
            <p className="text-foreground mb-6">
              Pengguna boleh log masuk atau berinteraksi menggunakan Facebook. Dengan berbuat demikian, anda memberi kuasa kepada kami untuk mengumpul dan menggunakan data profil Facebook tertentu (contoh: nama, e-mel, gambar profil) mengikut Dasar Privasi kami. Kami tidak akan menyiarkan ke akaun anda tanpa kebenaran.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              4. Harta Intelek
            </h2>
            <p className="text-foreground mb-6">
              Semua kandungan di laman web ini, termasuk produk, logo, dan penjenamaan, adalah hak milik PengulasAI.com dan tidak boleh digunakan semula tanpa kebenaran bertulis.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              5. Had Liabiliti
            </h2>
            <p className="text-foreground mb-6">
              Kami tidak bertanggungjawab ke atas sebarang kerosakan langsung atau tidak langsung yang mungkin timbul daripada penggunaan laman web, produk, atau perkhidmatan ini. Anda bersetuju untuk menggunakan laman web kami atas risiko anda sendiri.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              6. Penamatan
            </h2>
            <p className="text-foreground mb-6">
              Kami berhak untuk menggantung atau menamatkan akses anda jika anda melanggar mana-mana terma ini atau menyalahgunakan perkhidmatan kami.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              7. Perubahan kepada Terma
            </h2>
            <p className="text-foreground mb-6">
              Kami mungkin mengemas kini Terma Perkhidmatan ini pada bila-bila masa. Penggunaan berterusan laman web bermaksud anda menerima perubahan tersebut.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              8. Hubungi
            </h2>
            <p className="text-foreground">
              Jika anda mempunyai soalan tentang terma ini, sila hubungi kami di <a href="mailto:aaautomate123@gmail.com" className="text-primary hover:underline">aaautomate123@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
