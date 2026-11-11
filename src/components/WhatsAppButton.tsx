import { motion } from 'framer-motion'
import { WHATSAPP_LINK } from '../config'

/** Botón flotante de WhatsApp */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileTap={{ scale: 0.92 }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.003 2.667c-7.364 0-13.336 5.97-13.336 13.333 0 2.351.616 4.648 1.787 6.674L2.56 29.44l6.958-1.824a13.28 13.28 0 0 0 6.484 1.654h.001c7.364 0 13.333-5.97 13.333-13.334 0-3.562-1.387-6.91-3.905-9.428a13.275 13.275 0 0 0-9.428-3.841zm0 24.302h-.001a11.04 11.04 0 0 1-5.628-1.541l-.404-.24-4.183 1.097 1.117-4.079-.263-.418a11.028 11.028 0 0 1-1.69-5.888c0-6.1 4.966-11.063 11.069-11.063a11.01 11.01 0 0 1 7.825 3.247 11.01 11.01 0 0 1 3.24 7.825c-.002 6.1-4.968 11.06-11.082 11.06zm6.067-8.287c-.332-.166-1.966-.97-2.272-1.08-.305-.111-.527-.167-.75.166-.221.333-.86 1.08-1.054 1.302-.194.222-.388.25-.72.083-.332-.166-1.403-.517-2.672-1.649-.987-.88-1.654-1.968-1.848-2.3-.194-.333-.021-.513.146-.679.149-.148.332-.388.499-.582.166-.194.221-.333.332-.555.111-.222.056-.416-.028-.582-.083-.167-.749-1.805-1.026-2.472-.27-.648-.545-.56-.75-.57l-.639-.012c-.222 0-.582.083-.887.416-.305.333-1.163 1.137-1.163 2.773 0 1.636 1.191 3.217 1.357 3.439.167.222 2.344 3.578 5.678 5.017.793.343 1.413.547 1.895.7.797.253 1.521.217 2.094.132.639-.095 1.966-.804 2.243-1.58.277-.776.277-1.441.194-1.58-.083-.139-.305-.222-.637-.388z" />
      </svg>
    </motion.a>
  )
}
