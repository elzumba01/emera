import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  alpha: number
  hue: 'emerald' | 'gold'
  pulse: number
}

/** Lluvia suave de partículas esmeralda y dorado sobre canvas */
export default function Particles({ density = 70 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let particles: Particle[] = []
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(density, Math.floor((w * h) / 16000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.2 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(Math.random() * 0.35 + 0.08),
        alpha: Math.random() * 0.6 + 0.2,
        hue: Math.random() > 0.72 ? 'gold' : 'emerald',
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    const tick = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += 0.02
        if (p.y < -10) {
          p.y = h + 10
          p.x = Math.random() * w
        }
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        const tw = 0.55 + Math.sin(p.pulse) * 0.45
        const a = p.alpha * tw
        const color =
          p.hue === 'gold'
            ? `rgba(232, 201, 106, ${a})`
            : `rgba(52, 211, 153, ${a})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.shadowColor = p.hue === 'gold' ? '#d4af37' : '#10b981'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }
      raf = requestAnimationFrame(tick)
    }

    resize()
    tick()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
