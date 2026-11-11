import { motion } from 'framer-motion'
import { Mountain, TrendingUp, Globe2, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'

const FACTS = [
  {
    icon: Mountain,
    title: 'Origen Muzo, Colombia',
    text: 'Las minas de Muzo producen las esmeraldas más codiciadas del planeta, famosas por su verde profundo y su excepcional transparencia.',
  },
  {
    icon: TrendingUp,
    title: 'Activo refugio histórico',
    text: 'Las esmeraldas de alta calidad han mantenido y aumentado su valor a lo largo de siglos, con una oferta natural limitada.',
  },
  {
    icon: Globe2,
    title: 'Escasez creciente',
    text: 'La producción mundial de esmeraldas finas es cada vez más limitada, lo que impulsa su valor en los mercados internacionales.',
  },
  {
    icon: Sparkles,
    title: 'Belleza incomparable',
    text: 'Símbolo de riqueza y poder desde las civilizaciones antiguas, la esmeralda es una de las cuatro gemas preciosas del mundo.',
  },
]

export default function Emeralds() {
  return (
    <section id="esmeraldas" className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Texto + datos */}
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
                La gema
              </p>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-emerald-50 sm:text-4xl md:text-5xl">
                ¿Por qué <span className="text-emerald-gradient">esmeraldas</span>?
              </h2>
              <p className="mt-5 leading-relaxed text-emerald-100/70">
                Durante milenios, las esmeraldas han sido reserva de valor para reyes e
                imperios. Hoy, Frakxel las lleva a la blockchain para que cualquier persona
                pueda participar de este activo extraordinario.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {FACTS.map((f, i) => (
                <Reveal key={f.title} delay={0.08 * i}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="glass-panel flex gap-4 rounded-2xl p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-emerald-50">{f.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-emerald-100/60">{f.text}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Imagen de cristales */}
          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="gold-border relative overflow-hidden rounded-3xl glow-emerald"
            >
              <img
                src="/assets/emeralds-rough.png"
                alt="Cristales de esmeralda en bruto de origen colombiano"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04120c]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-display text-lg font-bold tracking-widest text-gold-gradient sm:text-xl">
                  ESMERALDAS COLOMBIANAS
                </p>
                <p className="mt-1 text-sm text-emerald-100/70">
                  El estándar de calidad más alto del mundo gemológico.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
