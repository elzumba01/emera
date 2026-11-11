import { motion } from 'framer-motion'
import { ArrowDown, Gem, ShieldCheck, Coins } from 'lucide-react'
import Particles from '../components/Particles'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Fondo con el banner NFT */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/banner.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04120c]/80 via-[#04120c]/60 to-[#04120c]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#04120c_85%)]" />
      <Particles density={80} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6">
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-200">
              100% respaldado por esmeraldas reales
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="visible"
            className="font-display text-6xl font-black leading-[0.95] tracking-wide sm:text-7xl md:text-8xl"
          >
            <span className="text-gold-gradient">EMERA</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="visible"
            className="mt-2 text-sm font-semibold uppercase tracking-[0.5em] text-emerald-300/80 sm:text-base"
          >
            by Frakxel
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-relaxed text-emerald-50/80 sm:text-lg"
          >
            El token <span className="font-semibold text-emerald-300">$EMRA</span> (ERC-20)
            convierte esmeraldas certificadas custodiadas en la bóveda de un banco en un
            activo digital líquido, transparente y accesible para todos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#swap"
              className="gold-border group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-base font-bold text-emerald-950 transition-all duration-300 hover:scale-[1.04] hover:from-emerald-400 hover:to-emerald-500 glow-emerald"
            >
              <Coins className="h-5 w-5 transition-transform duration-500 group-hover:rotate-[360deg]" />
              Comprar EMRA — 1 USDT
            </a>
            <a
              href="#respaldo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/30 px-8 py-4 text-base font-semibold text-emerald-100 backdrop-blur-sm transition-all duration-300 hover:border-emerald-300/60 hover:bg-emerald-500/10"
            >
              <Gem className="h-5 w-5 text-emerald-300" />
              Conocer el respaldo
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-3"
          >
            {['ERC-20', '1 EMRA = 1 USDT', 'Bóveda bancaria', 'Origen Muzo'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-emerald-400/20 bg-[#062017]/70 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-200/80 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#stats"
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-emerald-300/70 transition-colors hover:text-emerald-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  )
}
