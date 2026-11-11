import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDownUp, Gem, Info, Wallet } from 'lucide-react'
import Reveal from '../components/Reveal'
import Particles from '../components/Particles'

type Direction = 'buy' | 'sell'

function TokenPill({ symbol, label }: { symbol: 'USDT' | 'EMRA'; label: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-full border border-emerald-400/25 bg-[#062017] px-4 py-2">
      {symbol === 'USDT' ? (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#26a17b] text-xs font-black text-white">
          ₮
        </span>
      ) : (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700">
          <Gem className="h-4 w-4 text-emerald-950" />
        </span>
      )}
      <div className="leading-tight">
        <p className="text-sm font-bold text-emerald-50">{symbol}</p>
        <p className="text-[10px] text-emerald-200/50">{label}</p>
      </div>
    </div>
  )
}

export default function SwapSection() {
  const [amount, setAmount] = useState('')
  const [direction, setDirection] = useState<Direction>('buy')
  const [flipKey, setFlipKey] = useState(0)

  const parsed = parseFloat(amount.replace(',', '.'))
  const converted = useMemo(() => {
    if (!Number.isFinite(parsed) || parsed <= 0) return ''
    // 1 EMRA = 1 USDT
    return parsed.toLocaleString('en-US', { maximumFractionDigits: 6 })
  }, [parsed])

  const from = direction === 'buy' ? 'USDT' : 'EMRA'
  const to = direction === 'buy' ? 'EMRA' : 'USDT'

  const flip = () => {
    setDirection((d) => (d === 'buy' ? 'sell' : 'buy'))
    setFlipKey((k) => k + 1)
  }

  return (
    <section id="swap" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#062017]/50 to-transparent" />
      <Particles density={40} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
            Swap
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-emerald-50 sm:text-4xl md:text-5xl">
            Intercambia <span className="text-emerald-gradient">USDT</span> por{' '}
            <span className="text-gold-gradient">EMRA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-emerald-100/60 sm:text-base">
            Tasa fija y transparente: <strong className="text-emerald-300">1 EMRA = 1 USDT</strong>.
            Sin sorpresas, sin deslizamiento de precio.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-panel gold-border relative mx-auto mt-12 max-w-md rounded-3xl p-6 glow-emerald sm:p-8"
          >
            {/* Cabecera */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold tracking-widest text-emerald-50">
                SWAP EMRA
              </h3>
              <span className="rounded-full bg-amber-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-300">
                Vista previa
              </span>
            </div>

            {/* Desde */}
            <div className="rounded-2xl border border-emerald-500/15 bg-[#04150e]/80 p-4">
              <div className="mb-2 flex items-center justify-between text-xs text-emerald-200/50">
                <span>Pagas</span>
                <span>Saldo: —</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => {
                    const v = e.target.value
                    if (/^\d*([.,]\d*)?$/.test(v)) setAmount(v)
                  }}
                  placeholder="0.0"
                  className="w-full bg-transparent text-3xl font-bold text-emerald-50 outline-none placeholder:text-emerald-100/20"
                />
                <TokenPill symbol={from} label={from === 'USDT' ? 'Tether USD' : 'EMERA Token'} />
              </div>
            </div>

            {/* Botón de inversión */}
            <div className="relative my-3 flex justify-center">
              <motion.button
                key={flipKey}
                onClick={flip}
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/30 bg-[#0a2a1e] text-emerald-300 shadow-lg transition-colors hover:bg-emerald-500/20"
                aria-label="Invertir dirección"
              >
                <ArrowDownUp className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Hacia */}
            <div className="rounded-2xl border border-emerald-500/15 bg-[#04150e]/80 p-4">
              <div className="mb-2 flex items-center justify-between text-xs text-emerald-200/50">
                <span>Recibes</span>
                <span>Tasa 1:1</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={converted + to}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className={`w-full text-3xl font-bold ${
                      converted ? 'text-emerald-50' : 'text-emerald-100/20'
                    }`}
                  >
                    {converted || '0.0'}
                  </motion.span>
                </AnimatePresence>
                <TokenPill symbol={to} label={to === 'USDT' ? 'Tether USD' : 'EMERA Token'} />
              </div>
            </div>

            {/* Detalles de tasa */}
            <div className="mt-5 space-y-2 rounded-xl bg-emerald-500/5 p-4 text-xs">
              <div className="flex justify-between text-emerald-100/60">
                <span>Tasa de cambio</span>
                <span className="font-semibold text-emerald-300">1 EMRA = 1 USDT</span>
              </div>
              <div className="flex justify-between text-emerald-100/60">
                <span>Red</span>
                <span className="font-semibold text-emerald-300">Ethereum (ERC-20)</span>
              </div>
              <div className="flex justify-between text-emerald-100/60">
                <span>Respaldo</span>
                <span className="font-semibold text-gold-gradient">100% esmeraldas reales</span>
              </div>
            </div>

            {/* Botón principal (deshabilitado: contrato en desarrollo) */}
            <button
              disabled
              className="mt-6 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500/40 to-emerald-600/40 py-4 text-base font-bold text-emerald-100/60"
            >
              <Wallet className="h-5 w-5" />
              Conectar billetera
            </button>

            <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-emerald-100/45">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400/60" />
              El contrato inteligente ERC-20 de EMRA está en desarrollo. Esta interfaz es una
              demostración visual del swap que estará disponible en el lanzamiento.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
