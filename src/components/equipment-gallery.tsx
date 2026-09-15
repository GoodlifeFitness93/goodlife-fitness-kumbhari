'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export type Equipment = { src: string; alt: string; name: string; focus: string }

export function EquipmentGallery({ items }: { items: Equipment[] }) {
  const [active, setActive] = useState<number | null>(null)
  const [scale, setScale] = useState(1)
  const touch = useRef<{ x: number; distance: number | null }>({ x: 0, distance: null })
  const reducedMotion = useReducedMotion()
  const close = () => { setActive(null); setScale(1) }
  const change = (delta: number) => setActive((current) => current === null ? null : (current + delta + items.length) % items.length)

  useEffect(() => {
    if (active === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') change(1)
      if (event.key === 'ArrowLeft') change(-1)
    }
    window.addEventListener('keydown', onKey)
    const next = items[(active + 1) % items.length].src
    const previous = items[(active - 1 + items.length) % items.length].src
    ;[next, previous].forEach((src) => { const image = new window.Image(); image.src = src })
    return () => window.removeEventListener('keydown', onKey)
  }, [active, items])

  return <>
    <div className="equipment-grid">
      {items.map((item, index) => <motion.button key={item.src} className="equipment-card" type="button" onClick={() => setActive(index)} whileHover={reducedMotion ? undefined : { y: -6 }} whileTap={{ scale: 0.98 }} aria-label={`Open ${item.name} image`}>
        <span className="equipment-image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" loading="lazy" /></span>
        <span className="equipment-copy"><span><strong>{item.name}</strong><small>{item.focus}</small></span><ZoomIn aria-hidden="true" size={18} /></span>
      </motion.button>)}
    </div>
    <AnimatePresence>
      {active !== null && <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={`${items[active].name} gallery image`} onClick={(event) => { if (event.target === event.currentTarget) close() }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <button className="lightbox-close" type="button" onClick={close} aria-label="Close gallery"><X /></button>
        <button className="lightbox-arrow prev" type="button" onClick={() => change(-1)} aria-label="Previous image"><ChevronLeft /></button>
        <motion.div className="lightbox-image" initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: reducedMotion ? 0 : 0.25 }} onTouchStart={(event) => { touch.current.x = event.touches[0].clientX; touch.current.distance = event.touches.length === 2 ? Math.abs(event.touches[0].clientX - event.touches[1].clientX) : null }} onTouchMove={(event) => { if (event.touches.length === 2 && touch.current.distance) { const distance = Math.abs(event.touches[0].clientX - event.touches[1].clientX); setScale(Math.min(2.5, Math.max(1, distance / touch.current.distance))) } }} onTouchEnd={(event) => { const difference = event.changedTouches[0].clientX - touch.current.x; if (Math.abs(difference) > 50 && scale === 1) change(difference < 0 ? 1 : -1); touch.current.distance = null }}>
          <Image src={items[active].src} alt={items[active].alt} fill sizes="100vw" priority style={{ objectFit: 'contain', transform: `scale(${scale})` }} />
        </motion.div>
        <button className="lightbox-arrow next" type="button" onClick={() => change(1)} aria-label="Next image"><ChevronRight /></button>
        <p className="lightbox-caption">{items[active].name}<span>{active + 1} / {items.length}</span></p>
      </motion.div>}
    </AnimatePresence>
  </>
}
