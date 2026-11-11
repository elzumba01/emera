import { motion } from 'framer-motion'
import { Vault, ShieldCheck, FileCheck2, Landmark } from 'lucide-react'
import Reveal from '../components/Reveal'

const FEATURES = [
  {
    icon: Vault,
    title: 'Bóveda bancaria',
    text: 'Las esmeraldas que respaldan cada token EMRA están custodiadas en la bóveda de un banco, con protocolos de seguridad de nivel institucional.',
  },
  {
    icon: ShieldCheck,
    title: 'Respaldo 1:1 verificable',
    text: 'Cada token representa valor real en esmeraldas físicas. El respaldo es total: 100% del suministro cubierto por activos tangibles.',
  },
  {
    icon: FileCheck2,
    title: 'Certificación gemológica',
    text: 'Piedras certificadas por laboratorios gemológicos, con trazabilidad de origen y registro de quilataje, color y pureza.',
  },
  {
    icon: Landmark,
    title: 'Transparencia y auditoría',
    text: 'Reportes periódicos sobre las reservas físicas, alineando el mundo de los activos reales con la transparencia de la blockchain.',
  },
]

export default function Backing() {
  return (
    <section id="respaldo" className="relative overflow-hidden py-20 md:py-32">
      {/* Resplandores decorativos */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Imagen de la bóveda */}
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="gold-border relative overflow-hidden rounded-3xl glow-gold"
            >
              <img
                src="/assets/vault.png"
                alt="Bóveda bancaria con esmeraldas custodiadas"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04120c]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="font-display text-lg font-bold tracking-widest text-gold-gradient sm:text-xl">
                  CUSTODIA INSTITUCIONAL
                </p>
                <p className="mt-1 text-sm text-emerald-100/70">
                  Activos reales, protegidos en el mundo real.
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* Texto y características */}
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
                Respaldo real
              </p>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-emerald-50 sm:text-4xl md:text-5xl">
                Un token, <span className="text-emerald-gradient">esmeraldas reales</span> en
                la bóveda de un banco
              </h2>
              <p className="mt-5 leading-relaxed text-emerald-100/70">
                EMERA by Frakxel nace para unir dos mundos: la solidez milenaria de las
                esmeraldas y la agilidad de la tecnología blockchain. Cada EMRA está
                respaldado al 100% por esmeraldas físicas, debidamente certificadas y
                custodiadas en una bóveda bancaria.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={0.1 + i * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="glass-panel group h-full rounded-2xl p-5"
                  >
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500/25">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold text-emerald-50">{f.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-emerald-100/60">{f.text}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
