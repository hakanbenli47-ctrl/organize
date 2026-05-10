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
    desc: "Rap, pop ve sahne etkinlikleri için profesyonel konser organizasyonu.",
    icon: Ticket,
  },
  {
    title: "Sahne & Production",
    desc: "Ses, ışık, sahne akışı ve etkinlik atmosferi tek merkezden yönetilir.",
    icon: Mic2,
  },
  {
    title: "Etkinlik Yönetimi",
    desc: "Sanatçı, alan, ekip ve operasyon süreci uçtan uca planlanır.",
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
    <main className="min-h-screen overflow-x-hidden bg-[#07030f] text-white">
      <section className="relative overflow-hidden bg-[#07030f]">
        <video
          src={videos[0]}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 hidden h-full w-full object-cover opacity-35 lg:block"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#07030f] via-[#12071f] to-[#07030f] lg:bg-gradient-to-r lg:from-[#07030f] lg:via-[#10051f]/90 lg:to-[#07030f]/50" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(236,72,153,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.14),transparent_30%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:flex lg:min-h-screen lg:items-center lg:py-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold text-white/80 backdrop-blur-xl sm:text-sm">
                <Sparkles className="h-4 w-4 shrink-0 text-yellow-300" />
                <span className="truncate">
                  Karaduman Organizasyon & Production
                </span>
              </div>

              <h1 className="text-[2.05rem] font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
                Konserin
                <span className="block bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  sahneye çıkan
                </span>
                en güçlü hali.
              </h1>

              <p className="mt-4 max-w-xl text-[14px] leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
                Türkiye geneli konser, sahne prodüksiyonu ve profesyonel
                etkinlik yönetimi.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-row">
                <a
                  href="tel:05386731201"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 px-6 text-sm font-black text-black shadow-[0_0_30px_rgba(236,72,153,0.25)] transition hover:scale-[1.03] sm:h-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  <Phone className="h-5 w-5" />
                  Hemen Ara
                </a>

                <a
                  href="https://wa.me/905386731201?text=Merhaba,%20Karaduman%20Organizasyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/20 sm:h-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  <Music2 className="h-5 w-5 text-pink-300" />
                  WhatsApp’tan Yaz
                </a>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl sm:rounded-3xl sm:p-4"
                  >
                    <p className="text-xl font-black text-yellow-300 sm:text-2xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[11px] leading-4 text-white/60 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="relative">
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-10 sm:px-6 sm:py-20 lg:hidden">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl">
            <div className="relative h-[190px] overflow-hidden rounded-2xl">
              <video
                src={videos[1]}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-black/45 p-3 backdrop-blur">
                <p className="text-xs text-white/60">
                  Yetkili Müdür / Stage Manager
                </p>
                <h3 className="mt-1 text-lg font-black">
                  Muhammed Karaduman
                </h3>
                <p className="mt-1 text-sm font-black text-yellow-300">
                  0538 673 1201
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07030f] via-[#16071f] to-[#07030f]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-7 max-w-3xl sm:mb-12">
            <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-pink-300 sm:text-sm sm:tracking-[0.35em]">
              <Wand2 className="h-4 w-4" />
              Profesyonel Hizmetler
            </p>

            <h2 className="text-[1.65rem] font-black leading-tight sm:text-5xl">
              Sahne, ses, ışık ve organizasyon tek merkezden yönetilir.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 text-black sm:mb-6 sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3 className="text-lg font-black sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60 sm:mt-4 sm:text-base sm:leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-12 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end sm:mb-12">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-yellow-300 sm:text-sm sm:tracking-[0.35em]">
                <Video className="h-4 w-4" />
                Video Galeri
              </p>

              <h2 className="text-[1.65rem] font-black leading-tight sm:text-5xl">
                Etkinlik atmosferinden kısa görüntüler.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              Organizasyonun enerjisini göstermek için video odaklı bir galeri
              hazırlandı.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl sm:rounded-[2rem]"
              >
                <div className="relative h-[165px] overflow-hidden sm:h-auto sm:aspect-[9/14]">
                  <video
                    src={video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-2 text-xs font-black backdrop-blur sm:left-4 sm:top-4 sm:px-4 sm:text-sm">
                    Video {index + 1}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/10 bg-black/45 p-3 backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:p-4">
                    <p className="flex items-center gap-2 text-xs font-bold sm:text-sm">
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

      <section className="relative px-4 py-12 pb-28 sm:px-6 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.24),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-300/20 blur-3xl" />

          <div className="relative grid gap-7 lg:grid-cols-[1fr_0.8fr] lg:items-center sm:gap-10">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-yellow-300 sm:text-sm sm:tracking-[0.35em]">
                <CalendarDays className="h-4 w-4" />
                İletişim
              </p>

              <h2 className="text-[1.65rem] font-black leading-tight sm:text-5xl">
                Konser veya etkinlik organizasyonu için iletişime geçin.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:mt-5 sm:text-base sm:leading-8">
                Bilet satışlı konserler, sahne koordinasyonu ve etkinlik
                operasyonları için profesyonel çözüm sunulur.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/35 p-5 sm:rounded-[2rem] sm:p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500 text-black sm:h-14 sm:w-14">
                <Headphones className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <p className="text-sm text-white/50 sm:text-base">
                Yetkili Müdür / Stage Manager
              </p>

              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Muhammed Karaduman
              </h3>

              <p className="mt-2 text-xl font-black text-yellow-300 sm:mt-3 sm:text-2xl">
                0538 673 1201
              </p>

              <div className="mt-5 grid gap-3 sm:mt-7">
                <a
                  href="tel:05386731201"
                  className="rounded-full bg-white px-6 py-4 text-center text-sm font-black text-black transition hover:bg-yellow-300 sm:text-base"
                >
                  Telefonla Ara
                </a>

                <a
                  href="https://wa.me/905386731201?text=Merhaba,%20Karaduman%20Organizasyon%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-green-500 px-6 py-4 text-center text-sm font-black text-white transition hover:bg-green-600 sm:text-base"
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
        className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-green-500 px-5 py-4 text-center text-sm font-black text-white shadow-[0_0_35px_rgba(34,197,94,0.45)] transition hover:scale-[1.02] sm:left-auto sm:right-5 sm:w-auto sm:px-6"
      >
        WhatsApp’tan Yaz
      </a>
    </main>
  );
}