import Footer from '#app/components/sections/Footer';
import { Navbar } from '#app/components/sections/Navbar';
import { Button } from '#app/components/ui/button';
import { Card } from '#app/components/ui/card';
import { Seo } from '#app/components/Seo';

const TentangKamiPage = () => {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Seo
          title="Tentang Kami"
          description="Profil Teamhore: tim iklan digital yang fokus pada strategi rapi, eksekusi disiplin, dan transparansi."
          path="/tentang-kami"
        />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-32">
          <section>
            <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
              <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Tentang Teamhore
                  </div>
                  <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                    Tim iklan digital dengan gaya kerja rapi, transparan, dan fokus hasil.
                  </h1>
                  <p className="text-base text-muted-foreground md:text-lg">
                    Kami percaya pertumbuhan yang stabil lahir dari struktur yang jelas. Dari riset,
                    eksekusi, sampai evaluasi, semua dicatat dan bisa ditelusuri. Tanpa drama, tanpa
                    jargon berlebihan.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild size="lg">
                      <a href="/konsultasi">Mulai konsultasi</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="/services/google-advertising">Lihat layanan</a>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-6 rounded-[32px] bg-white/70 blur-2xl" />
                  <Card className="relative overflow-hidden">
                    <div className="border-b px-6 py-4">
                      <div className="text-sm font-semibold">Workspace Ringkas</div>
                      <div className="text-xs text-muted-foreground">
                        Setiap kampanye punya satu sumber kebenaran.
                      </div>
                    </div>
                    <div className="px-6 py-6">
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div className="rounded-lg border bg-muted/60 px-3 py-2 text-xs uppercase tracking-[0.2em]">
                          Ringkasan
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="rounded-xl border bg-white px-4 py-3">
                            <div className="text-xs text-muted-foreground">Fokus Utama</div>
                            <div className="mt-1 text-sm font-semibold">
                              Struktur &amp; akuntabilitas
                            </div>
                          </div>
                          <div className="rounded-xl border bg-white px-4 py-3">
                            <div className="text-xs text-muted-foreground">Gaya Kerja</div>
                            <div className="mt-1 text-sm font-semibold">Weekly review</div>
                          </div>
                        </div>
                        <div className="rounded-xl border bg-white px-4 py-3">
                          <div className="text-xs text-muted-foreground">Status Mingguan</div>
                          <div className="mt-2 flex items-center gap-2 text-sm font-medium">
                            <span className="inline-flex h-2 w-2 rounded-full bg-green-500" />
                            Kampanye stabil, optimasi berjalan
                          </div>
                        </div>
                        <div className="rounded-xl border bg-white px-4 py-3">
                          <div className="text-xs text-muted-foreground">Catatan</div>
                          <p className="mt-1 text-sm text-foreground">
                            Semua eksperimen punya hipotesis dan ukuran jelas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
              <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Cerita kami
                  </div>
                  <h2 className="text-3xl font-semibold md:text-4xl">Berawal dari kebutuhan yang sederhana.</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Banyak bisnis tumbuh cepat tapi tidak punya sistem. Kami memulai Teamhore untuk
                    membuat iklan digital terasa lebih terstruktur, lebih dapat dipahami, dan lebih
                    aman untuk di-scale.
                  </p>
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      title: '2019 - Riset lapangan',
                      desc: 'Mengumpulkan pola dari ratusan iklan yang gagal dan yang sukses.',
                    },
                    {
                      title: '2021 - Sistem internal',
                      desc: 'Membuat playbook dengan eksperimen kecil dan dokumentasi rutin.',
                    },
                    {
                      title: '2023 - Tim lintas kanal',
                      desc: 'Menggabungkan Google, TikTok, dan Meta dalam satu strategi.',
                    },
                  ].map((item) => (
                    <Card key={item.title} className="border-border/60 bg-white p-5">
                      <div className="text-sm font-semibold">{item.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
              <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Cara kerja
                  </div>
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    Workflow yang mirip workspace Notion: ringkas, terhubung, dan transparan.
                  </h2>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="rounded-2xl border bg-white px-5 py-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        01. Diagnosa
                      </div>
                      <p className="mt-2 text-sm text-foreground">
                        Audit funnel dan histori data, lalu tetapkan prioritas growth paling aman.
                      </p>
                    </div>
                    <div className="rounded-2xl border bg-white px-5 py-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        02. Eksperimen
                      </div>
                      <p className="mt-2 text-sm text-foreground">
                        Uji kreatif, audiens, dan bidding dengan ukuran sukses yang disepakati.
                      </p>
                    </div>
                    <div className="rounded-2xl border bg-white px-5 py-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        03. Skalasi
                      </div>
                      <p className="mt-2 text-sm text-foreground">
                        Hanya menaikkan budget pada pola yang sudah terbukti stabil.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Card className="border-border/60 bg-white p-6">
                    <div className="text-sm font-semibold">Checklist Mingguan</div>
                    <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {[
                        'Evaluasi kreatif dengan CTR & CVR',
                        'Audit alokasi budget per kanal',
                        'Rangkuman insight untuk tim internal',
                        'Next-step yang bisa dieksekusi cepat',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-1 inline-flex h-4 w-4 rounded border bg-white" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                  <Card className="border-border/60 bg-white p-6">
                    <div className="text-sm font-semibold">Transparansi Data</div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Semua laporan disusun agar mudah dibaca oleh non-technical team. Fokus pada
                      keputusan, bukan hanya metrik.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: 'Kejelasan',
                    desc: 'Semua strategi ditulis dalam bahasa yang bisa dipakai tim marketing dan owner.',
                  },
                  {
                    title: 'Disiplin Eksekusi',
                    desc: 'Tidak ada improvisasi tanpa data. Semua eksperimen punya tujuan.',
                  },
                  {
                    title: 'Kolaboratif',
                    desc: 'Kami bekerja seperti perpanjangan tim Anda, bukan vendor jarak jauh.',
                  },
                ].map((item) => (
                  <Card key={item.title} className="border-border/60 bg-white p-6">
                    <div className="text-sm font-semibold">{item.title}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
              <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Tim inti
                  </div>
                  <h2 className="text-3xl font-semibold md:text-4xl">Orang di balik proses.</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Kami tim kecil dengan spesialisasi jelas. Fokus pada kualitas eksekusi dan
                    komunikasi yang singkat tapi tajam.
                  </p>
                  <Button asChild variant="outline">
                    <a href="/konsultasi">Tanya langsung ke tim</a>
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    { role: 'Strategist Lead', detail: 'Riset & arah kampanye' },
                    { role: 'Performance Ads', detail: 'Optimasi harian & bidding' },
                    { role: 'Creative Partner', detail: 'Kreatif yang terukur' },
                    { role: 'Data Analyst', detail: 'Laporan & evaluasi mingguan' },
                  ].map((item) => (
                    <Card key={item.role} className="border-border/60 bg-white p-5">
                      <div className="text-sm font-semibold">{item.role}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container mx-auto max-w-6xl px-4 pb-20 md:px-6">
              <Card className="border-border/60 bg-white p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Siap kolaborasi
                    </div>
                    <h2 className="text-3xl font-semibold md:text-4xl">
                      Kamu fokus di produk, kami urus iklannya.
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                      Mari ngobrol singkat, kami susun langkah awal yang bisa dieksekusi dalam 2
                      minggu.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild size="lg">
                      <a href="/konsultasi">Mulai konsultasi</a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="/services/meta-advertising">Lihat studi kasus</a>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Respon cepat, tanpa kontrak panjang.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default TentangKamiPage;
