import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Gem, Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#respaldo', label: 'Respaldo' },
  { href: '#token', label: 'Token' },
  { href: '#swap', label: 'Swap' },
  { href: '#esmeraldas', label: 'Esmeraldas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-emerald-500/10 bg-[#04120c]/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20">
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 glow-emerald transition-transform duration-500 group-hover:rotate-12">
            <Gem className="h-5 w-5 text-emerald-950" strokeWidth={2.4} />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg font-bold tracking-[0.18em] text-gold-gradient">
              EMERA
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-emerald-300/70">
              by Frakxel
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-emerald-100/70 transition-colors duration-300 hover:text-emerald-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#swap"
            className="gold-border rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2 text-sm font-semibold text-emerald-950 transition-all duration-300 hover:scale-105 hover:from-emerald-400 hover:to-emerald-500 glow-emerald"
          >
            Comprar EMRA
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-emerald-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-emerald-500/10 bg-[#04120c]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-emerald-100/80 transition-colors hover:bg-emerald-500/10 hover:text-emerald-300"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#swap"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-center text-sm font-semibold text-emerald-950"
              >
                Comprar EMRA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
