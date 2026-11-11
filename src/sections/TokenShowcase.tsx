import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, Layers, Coins, Network } from 'lucide-react'
import Reveal from '../components/Reveal'

const SPECS = [
  { icon: Coins, label: 'Símbolo', value: '$EMRA' },
  { icon: Network, label: 'Estándar', value: 'ERC-20' },
  { icon: BadgeCheck, label: 'Precio', value: '1 USDT' },
  { icon: Layers, label: 'Respaldo', value: '100% RWA' },
]

export default function TokenShowcase() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: -py * 14, ry: px * 14 })
  }

  return (
    <section id="token" className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
                El token
              </p>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-emerald-50 sm:text-4xl md:text-5xl">
                <span className="text-gold-gradient">$EMRA</span> — la esmeralda
                convertida en activo digital
              </h2>
              <p className="mt-5 leading-relaxed text-emerald-100/70">
                EMRA es un token <strong className="text-emerald-300">ERC-20</strong> emitido
                sobre Ethereum. Su precio de referencia es de{' '}
                <strong className="text-emerald-300">1 USDT por token</strong> y su valor está
                anclado a esmeraldas físicas reales, certificadas y custodiadas
                profesionalmente.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {SPECS.map((s, i) => (
                <Reveal key={s.label} delay={0.08 * i}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="glass-panel gold-border rounded-2xl p-5 text-center"
                  >
                    <s.icon className="mx-auto mb-2 h-5 w-5 text-emerald-300" />
                    <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-200/50">
                      {s.label}
                    </p>
                    <p className="font-display mt-1 text-lg font-bold text-emerald-50">
                      {s.value}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs leading-relaxed text-emerald-100/60">
                El contrato inteligente de EMRA se encuentra en fase final de desarrollo y
                auditoría. La sección de swap inferior es una vista previa de la experiencia
                de compra.
              </p>
            </Reveal>
          </div>

          {/* Tarjeta NFT con tilt 3D */}
          <Reveal className="order-1 lg:order-2" delay={0.15}>
            <div style={{ perspective: 1200 }} className="mx-auto max-w-sm">
              <motion.div
                ref={cardRef}
                onMouseMove={onMove}
                onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
                animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="animate-float-slow gold-border relative overflow-hidden rounded-[2rem] glow-emerald"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src="/assets/nft2.jpg"
                  alt="NFT EMERA — Certified Physical Emerald"
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(115deg, transparent 30%, rgba(246,226,122,0.18) 45%, rgba(110,231,183,0.15) 55%, transparent 70%)',
                  }}
                />
              </motion.div>
              <p className="mt-5 text-center text-xs uppercase tracking-[0.3em] text-emerald-200/50">
                Certified Physical Emerald NFT · Origen Muzo
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
