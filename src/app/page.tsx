import Image from 'next/image'
import { ArrowRight, BadgeCheck, ChevronRight, Clock3, Dumbbell, MapPin, Phone, ShieldCheck, Star, Users, MessageCircle, Navigation } from 'lucide-react'
import { EquipmentGallery, type Equipment } from '@/components/equipment-gallery'
import { ReviewCarousel } from '@/components/review-carousel'
import { TeamShowcase } from '@/components/team-showcase'

const whatsapp = 'https://wa.me/918421302138?text=Hi%20Goodlife%20Fitness%20Club%20%26%20Gym%20(Kumbhari),%20I%20would%20like%20to%20know%20more%20about%20membership%20plans.'
const phone = 'tel:+918421302138'

const equipment: Equipment[] = [
  { src: '/images/gym/01-dumbbell-rack.png', alt: 'Organised dumbbell rack at Goodlife Fitness Kumbhari', name: 'Dumbbell Collection', focus: 'Free weights' },
  { src: '/images/gym/02-treadmills.png', alt: 'Two treadmills in the Goodlife Fitness Kumbhari cardio area', name: 'Treadmills', focus: 'Cardio training' },
  { src: '/images/gym/03-leg-press-front.png', alt: 'Leg press machine at Goodlife Fitness Kumbhari', name: 'Leg Press', focus: 'Lower body' },
  { src: '/images/gym/04-leg-extension.png', alt: 'Leg extension machine at Goodlife Fitness Kumbhari', name: 'Leg Extension', focus: 'Lower body' },
  { src: '/images/gym/05-seated-machine-red-upholstery.png', alt: 'Seated strength machine at Goodlife Fitness Kumbhari', name: 'Seated Strength Station', focus: 'Strength training' },
  { src: '/images/gym/06-bench-press.png', alt: 'Bench press station at Goodlife Fitness Kumbhari', name: 'Bench Press', focus: 'Strength training' },
  { src: '/images/gym/07-plate-loaded-seat.png', alt: 'Plate-loaded seated machine at Goodlife Fitness Kumbhari', name: 'Plate-loaded Station', focus: 'Strength training' },
  { src: '/images/gym/08-seated-leg-machine.png', alt: 'Seated leg machine at Goodlife Fitness Kumbhari', name: 'Seated Leg Machine', focus: 'Lower body' },
  { src: '/images/gym/09-angled-leg-press.png', alt: 'Angled leg press machine at Goodlife Fitness Kumbhari', name: 'Angled Leg Press', focus: 'Lower body' },
]

const schema = {
  '@context': 'https://schema.org', '@type': 'HealthClub', name: 'Goodlife Fitness Club & Gym — Kumbhari',
  address: { '@type': 'PostalAddress', streetAddress: 'Godutai Parulekar New Vidi, Gharakul, South Kumbhari, 13 No Hall', addressLocality: 'Kumbhari', addressRegion: 'Maharashtra', postalCode: '413006', addressCountry: 'IN' },
  telephone: '+918421302138', aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '306' },
}

function PrimaryLink({ href, children, icon = true }: { href: string; children: React.ReactNode; icon?: boolean }) { return <a className="button button-primary" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{children}{icon && <ArrowRight size={18} aria-hidden="true" />}</a> }
function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) { return <a className="button button-secondary" href={href}>{children}</a> }

export default function Home() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header"><a href="#top" className="brand" aria-label="Goodlife Fitness Club and Gym home"><span>GOODLIFE</span><small>FITNESS · KUMBHARI</small></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#equipment">Equipment</a><a href="#location">Location</a></nav><a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Join now <ArrowRight size={16} /></a></header>

    <section className="hero" id="top"><Image src="/images/hero-athlete.png" alt="Athlete performing a barbell squat" fill priority sizes="100vw" className="hero-image" /><div className="hero-overlay" /><div className="container hero-content"><p className="eyebrow"><BadgeCheck size={16} aria-hidden="true" /> Kumbhari · Solapur</p><h1>SOLAPUR’S MOST<br /><em>TRUSTED GYM</em><br />NOW IN KUMBHARI</h1><p className="hero-subtitle">Real Results. Real Coaching. Real Community.</p><div className="hero-actions"><PrimaryLink href={whatsapp}>Join now</PrimaryLink><SecondaryLink href={phone}>Call now</SecondaryLink></div><div className="hero-proof" aria-label="Goodlife fitness facts"><span><strong>5.0★</strong> Google rating</span><span><strong>306</strong> reviews</span><span><strong>Arvind Sir</strong> Personal Trainer</span></div></div></section>

    <section className="section about" id="about"><div className="container split"><div><p className="eyebrow">THE GOODLIFE STANDARD</p><h2>MORE THAN A<br /><em>WORKOUT.</em></h2></div><div className="body-copy"><p>Goodlife Kumbhari is built around the things that make training stick: personal attention, trusted coaching, and a community that shows up for each other.</p><p>Train with purpose in a focused, well-maintained environment—then take the next step with confidence.</p><PrimaryLink href={whatsapp}>Ask about membership</PrimaryLink></div></div><div className="trust-strip"><span><ShieldCheck /> Trusted Goodlife standard</span><span><Users /> Community driven</span><span><Dumbbell /> Personal coaching</span></div></section>

    <section className="section equipment-section" id="equipment"><div className="container"><div className="section-heading"><div><p className="eyebrow">THE TRAINING FLOOR</p><h2>REAL EQUIPMENT.<br /><em>READY FOR WORK.</em></h2></div><p>Explore the Goodlife Kumbhari floor. Tap any image for a closer look.</p></div><EquipmentGallery items={equipment} /><div className="section-cta"><span><Star fill="currentColor" size={18} /> 5.0 rated by 306 Google reviewers</span><PrimaryLink href={whatsapp}>Start your Goodlife journey</PrimaryLink></div></div></section>

    <TeamShowcase />

    <section className="section result-section"><div className="container result-grid"><article className="result-card"><p className="eyebrow">MEMBER MILESTONE</p><strong>18<span>kg</span></strong><h3>IN 3 MONTHS</h3><p>One shared Goodlife member result. Results vary by person and commitment.</p></article><div><p className="eyebrow">TRUST BUILT IN</p><h2>YOUR NEXT STEP<br />STARTS <em>HERE.</em></h2><p className="body-copy">The Goodlife experience is designed to make joining feel simple: a real gym, approachable coaching, and a community close to home.</p><PrimaryLink href={whatsapp}>Message on WhatsApp</PrimaryLink></div></div></section>

    <section className="section reviews"><div className="container"><div className="section-heading"><div><p className="eyebrow">GOOGLE REVIEWS</p><h2>TRUSTED BY<br /><em>THE COMMUNITY.</em></h2></div><a className="text-link" href="https://www.google.com/search?q=Goodlife+Fitness+Club+%26+Gym+Kumbhari+reviews" target="_blank" rel="noreferrer">Read more on Google <ChevronRight size={18} /></a></div><ReviewCarousel /></div></section>

    <section className="section location" id="location"><div className="container location-grid"><div><p className="eyebrow">FIND YOUR FLOOR</p><h2>GOODLIFE<br /><em>KUMBHARI.</em></h2><address><MapPin size={20} aria-hidden="true" /> Godutai Parulekar New Vidi, Gharakul,<br />South Kumbhari, 13 No Hall,<br />Kumbhari, Maharashtra 413006</address><dl><div><dt><Clock3 size={18} /> Hours</dt><dd>Open · closes 9:30 PM</dd></div><div><dt><Phone size={18} /> Call</dt><dd><a href={phone}>+91 84213 02138</a></dd></div><div><dt><MapPin size={18} /> Plus code</dt><dd>JXV6+PP</dd></div></dl><div className="location-actions"><PrimaryLink href={whatsapp}>WhatsApp us</PrimaryLink><a className="button button-secondary" href="https://www.google.com/maps/search/?api=1&query=JXV6%2BPP%20Kumbhari%20Maharashtra" target="_blank" rel="noreferrer"><Navigation size={18} /> Directions</a></div></div><iframe title="Map location of Goodlife Fitness Club and Gym Kumbhari" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=JXV6%2BPP%20Kumbhari%20Maharashtra&output=embed" /></div></section>

    <section className="final-cta"><div className="container"><p className="eyebrow dark">JOIN THE GOODLIFE COMMUNITY</p><h2>JOIN GOODLIFE<br />KUMBHARI TODAY.</h2><p>Same trusted Goodlife standard. Now in your neighborhood.</p><div><PrimaryLink href={whatsapp}>WhatsApp now</PrimaryLink><a className="button button-dark" href={phone}>Call +91 84213 02138</a></div></div></section>
    <footer><div className="container"><a className="brand" href="#top"><span>GOODLIFE</span><small>FITNESS · KUMBHARI</small></a><p>© {new Date().getFullYear()} Goodlife Fitness Club & Gym — Kumbhari</p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div></footer>
    <div className="mobile-cta"><a href={phone}><Phone size={18} /> Call</a><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a></div>
  </main>
}
