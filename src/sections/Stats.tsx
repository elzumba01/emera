import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Reveal from '../components/Reveal'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    let raf = 0
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const STATS = [
  { value: 100, suffix: '%', label: 'Respaldo en activos reales', sub: 'Esmeraldas físicas certificadas' },
  { value: 1, suffix: ' USDT', label: 'Precio por token EMRA', sub: 'Valor estable y transparente' },
  { value: 24, suffix: '/7', label: 'Liquidez digital', sub: 'Compra y venta sin fronteras' },
  { value: 1, suffix: '', label: 'Bóveda bancaria', sub: 'Custodia de máxima seguridad' },
]

const MARQUEE = [
  'ESMERALDAS REALES',
  'TOKEN ERC-20',
  'RESPALDO 100%',
  'BÓVEDA BANCARIA',
  '1 EMRA = 1 USDT',
  'ORIGEN MUZO',
  'FRAKXEL',
]

export default function Stats() {
  return (
    <section id="stats" className="relative">
      {/* Marquee dorado */}
      <div className="overflow-hidden border-y border-emerald-500/15 bg-[#062017]/60 py-3 backdrop-blur-sm">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/60">
              {item}
              <span className="text-gold-gradient">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-panel gold-border rounded-2xl p-7 text-center"
              >
                <div className="font-display text-4xl font-bold text-emerald-gradient sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm font-semibold text-emerald-100">{s.label}</div>
                <div className="mt-1 text-xs text-emerald-200/50">{s.sub}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
