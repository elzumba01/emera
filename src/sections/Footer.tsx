import { Gem, MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../config'
import Reveal from '../components/Reveal'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-500/10">
      {/* CTA final */}
      <div className="relative py-20 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/assets/banner.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04120c] via-[#04120c]/70 to-[#04120c]" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight text-emerald-50 sm:text-4xl md:text-5xl">
              Sé parte de la <span className="text-gold-gradient">nueva era</span> de las
              esmeraldas
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-emerald-100/70 sm:text-base">
              ¿Quieres más información sobre EMERA, el token EMRA o la preventa? Nuestro
              equipo te atiende directamente por WhatsApp.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-4 text-base font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Hablar con el equipo
            </a>
          </Reveal>
        </div>
      </div>

      {/* Pie */}
      <div className="relative border-t border-emerald-500/10 bg-[#030d08]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-700">
              <Gem className="h-4 w-4 text-emerald-950" strokeWidth={2.4} />
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-bold tracking-[0.18em] text-gold-gradient">
                EMERA
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300/60">
                by Frakxel
              </p>
            </div>
          </div>

          <p className="max-w-md text-center text-[11px] leading-relaxed text-emerald-100/40 md:text-left">
            EMRA es un token ERC-20 en fase de desarrollo. El contenido de esta página es
            informativo y no constituye asesoría financiera ni una oferta pública de valores.
          </p>

          <p className="text-[11px] text-emerald-100/40">
            © {new Date().getFullYear()} Frakxel · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
