import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Laman Utama
          </Button>
        </Link>

        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Dasar Privasi
          </h1>
          <p className="text-muted-foreground mb-8">Dikemas kini: 1 Julai 2025</p>

          <div className="prose prose-slate max-w-none">
            <p className="text-foreground mb-6">
              Di <strong>PengulasAI.com</strong>, kami komited untuk melindungi privasi anda dan data yang anda kongsikan dengan kami. Dasar ini menerangkan bagaimana kami mengumpul, menggunakan, dan melindungi maklumat anda, termasuk data yang dikumpul melalui log masuk Facebook atau perkhidmatan pihak ketiga.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              1. Maklumat Yang Kami Kumpul
            </h2>
            <ul className="list-disc pl-6 mb-6 text-foreground space-y-2">
              <li>Maklumat peribadi (contoh: nama, alamat e-mel) apabila anda membuat pembelian atau membuat akaun</li>
              <li>Data profil Facebook (contoh: nama, e-mel, gambar profil, ID pengguna) apabila anda log masuk menggunakan Facebook</li>
              <li>Data peranti dan penggunaan (contoh: alamat IP, jenis pelayar) melalui alat analitik</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              2. Bagaimana Kami Menggunakan Data Anda
            </h2>
            <ul className="list-disc pl-6 mb-6 text-foreground space-y-2">
              <li>Untuk memproses pesanan anda dan menghantar produk</li>
              <li>Untuk menyediakan sokongan pelanggan</li>
              <li>Untuk menghantar e-mel transaksi atau promosi (anda boleh memilih keluar)</li>
              <li>Untuk menambah baik laman web kami dan pengalaman pengguna</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              3. Perkongsian Data dan Keselamatan
            </h2>
            <p className="text-foreground mb-6">
              Kami tidak menjual atau menyewa data peribadi anda. Data hanya dikongsi dengan penyedia perkhidmatan yang diperlukan untuk mengendalikan kedai kami (contoh: pemproses pembayaran, perkhidmatan e-mel). Semua data disimpan dengan selamat menggunakan perlindungan standard industri.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              4. Data Aplikasi Facebook
            </h2>
            <p className="text-foreground mb-6">
              Jika anda menggunakan aplikasi kami melalui Facebook, kami mungkin mengumpul dan menyimpan maklumat terhad yang disediakan oleh Meta Platforms Inc. Ini termasuk nama, alamat e-mel, dan ID Facebook anda. Data ini digunakan semata-mata untuk log masuk dan fungsi aplikasi, dan tidak dikongsi dengan mana-mana pihak ketiga di luar keperluan operasi.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              5. Arahan Pemadaman Data
            </h2>
            <p className="text-foreground mb-6">
              Jika anda ingin memadamkan data anda dari sistem kami, sila hantar e-mel dengan subjek <strong>"Permintaan Pemadaman Data"</strong> ke <a href="mailto:aaautomate123@gmail.com" className="text-primary hover:underline">aaautomate123@gmail.com</a>. Pastikan untuk menyertakan nama dan e-mel atau ID Facebook yang berkaitan dengan akaun anda.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              6. Hubungi
            </h2>
            <p className="text-foreground">
              Jika anda mempunyai sebarang soalan atau kebimbangan mengenai privasi anda, anda boleh menghubungi kami di:
            </p>
            <p className="text-foreground mt-2">
              E-mel: <a href="mailto:aaautomate123@gmail.com" className="text-primary hover:underline">aaautomate123@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
