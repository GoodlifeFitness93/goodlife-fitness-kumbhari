'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const slides = [
  ['5.0★ Google Rating', 'A verified public rating shown on Google.'],
  ['306 Reviews', 'Explore feedback from the Goodlife community.'],
  ['Personal Coaching', 'Guidance with Arvind Sir and the Goodlife team.'],
]

export function ReviewCarousel() {
  const [ref, api] = useEmblaCarousel({ loop: true, align: 'start' })
  return <div className="review-carousel"><div className="embla" ref={ref}><div className="embla-container">{slides.map(([title, copy]) => <article className="review-slide" key={title}><Star fill="currentColor" size={20} aria-hidden="true" /><h3>{title}</h3><p>{copy}</p><a href="https://www.google.com/search?q=Goodlife+Fitness+Club+%26+Gym+Kumbhari+reviews" target="_blank" rel="noreferrer">Read more on Google <span className="sr-only">(opens in a new tab)</span></a></article>)}</div></div><div className="carousel-controls"><button type="button" onClick={() => api?.scrollPrev()} aria-label="Previous review"><ChevronLeft /></button><button type="button" onClick={() => api?.scrollNext()} aria-label="Next review"><ChevronRight /></button></div></div>
}
