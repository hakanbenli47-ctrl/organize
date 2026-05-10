"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Headphones,
  Mic2,
  Music2,
  Phone,
  Play,
  Sparkles,
  Star,
  Ticket,
  Users,
  Video,
  Wand2,
} from "lucide-react";

const videos = [
  "/karaduman-1.mp4",
  "/karaduman-2.mp4",
  "/karaduman-3.mp4",
  "/karaduman-4.mp4",
  "/karaduman-5.mp4",
  "/karaduman-6.mp4",
  "/karaduman-7.mp4",
];

const services = [
  {
    title: "Bilet Satışlı Konserler",
    desc: "Türkiye genelinde rap, pop ve sahne etkinlikleri için profesyonel konser organizasyonu.",
    icon: Ticket,
  },
  {
    title: "Sahne & Production",
    desc: "Ses, ışık, sahne akışı ve etkinlik atmosferini tek merkezden yönetiyoruz.",
    icon: Mic2,
  },
  {
    title: "Etkinlik Yönetimi",
    desc: "Sanatçı, alan, ekip ve operasyon sürecinde uçtan uca koordinasyon.",
    icon: Users,
  },
];

const stats = [
  { value: "TR", label: "Türkiye Geneli" },
  { value: "7+", label: "Video İçerik" },
  { value: "Van", label: "Aktif Saha" },
  { value: "360°", label: "Organizasyon" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07030f] text-white">
      <section className="relative min-h-screen">
        <video
          src={videos[0]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#07030f] via-[#10051f]/90 to-[#07030f]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.35),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(250,204,21,0.25),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.35),transparent_35%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-24 sm:px-6">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                Karaduman Organizasyon & Production
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                Konserin
                <span className="block bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  sahneye çıkan
                </span>
                en güçlü hali.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Türkiye geneli rap, pop ve farklı müzik alanlarında bilet
                satışlı konserler, sahne prodüksiyonu ve profesyonel etkinlik
                yönetimi.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:05386731201"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 px-8 py-4 text-base font-black text-black shadow-[0_0_40px_rgba(236,72,153,0.35)] transition hover:scale-[1.03]"
                >
                  <Phone className="h-5 w-5" />
                  Hemen Ara
                </a>

                <a
                  href="https://wa.me/905386731201?text=Merhaba,%20Karaduman%20Organizasyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
                >
                  <Music2 className="h-5 w-5 text-pink-300" />
                  WhatsApp’tan Yaz
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                  >
                    <p className="text-2xl font-black text-yellow-300">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-white/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-yellow-300/20 via-pink-500/30 to-purple-600/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.3rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[9/13] overflow-hidden rounded-[1.8rem]">
                  <video
                    src={videos[1]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-bold backdrop-blur">
                    <Play className="h-4 w-4 text-yellow-300" />
                    Canlı atmosfer
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
                    <p className="text-sm text-white/60">
                      Stage Manager / Yetkili Müdür
                    </p>
                    <h3 className="mt-1 text-2xl font-black">
                      Muhammed Karaduman
                    </h3>
                    <p className="mt-2 text-lg font-bold text-yellow-300">
                      0538 673 1201
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07030f] via-[#16071f] to-[#07030f]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.35em] text-pink-300">
              <Wand2 className="h-4 w-4" />
              Profesyonel Hizmetler
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Eğlence, sahne ve organizasyon sürecini güçlü bir marka
              deneyimine dönüştürür.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 text-black">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
                <Video className="h-4 w-4" />
                Video Galeri
              </p>

              <h2 className="text-4xl font-black sm:text-5xl">
                Sahadan gelen enerjiyi gösteren video alanı.
              </h2>
            </div>

            <p className="max-w-md text-white/55">
              Görsel olmadığı için sayfa video merkezli hazırlandı. Böylece
              organizasyonun gerçek atmosferi daha güçlü görünür.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl"
              >
                <div className="relative aspect-[9/14] overflow-hidden">
                  <video
                    src={video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-sm font-black backdrop-blur">
                    Video {index + 1}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur">
                    <p className="flex items-center gap-2 text-sm font-bold">
                      <Star className="h-4 w-4 text-yellow-300" />
                      Karaduman Organizasyon
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.32),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.22),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-300/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.35em] text-yellow-300">
                <CalendarDays className="h-4 w-4" />
                İletişim
              </p>

              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Konser, etkinlik veya sahne organizasyonu için iletişime geçin.
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/60">
                Karaduman Organizasyon & Production; bilet satışlı konserler,
                sahne koordinasyonu ve etkinlik operasyonlarında profesyonel
                çözüm sunar.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 text-black">
                <Headphones className="h-7 w-7" />
              </div>

              <p className="text-white/50">Yetkili Müdür / Stage Manager</p>
              <h3 className="mt-2 text-3xl font-black">
                Muhammed Karaduman
              </h3>
              <p className="mt-3 text-2xl font-black text-yellow-300">
                0538 673 1201
              </p>

              <div className="mt-7 grid gap-3">
                <a
                  href="tel:05386731201"
                  className="rounded-full bg-white px-6 py-4 text-center font-black text-black transition hover:bg-yellow-300"
                >
                  Telefonla Ara
                </a>

                <a
                  href="https://wa.me/905386731201?text=Merhaba,%20Karaduman%20Organizasyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-green-500 px-6 py-4 text-center font-black text-white transition hover:bg-green-600"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/905386731201?text=Merhaba,%20Karaduman%20Organizasyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-6 py-4 text-sm font-black text-white shadow-[0_0_35px_rgba(34,197,94,0.45)] transition hover:scale-105"
      >
        WhatsApp
      </a>
    </main>
  );
}