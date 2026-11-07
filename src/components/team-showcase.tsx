import Image from 'next/image'

interface TeamMember {
  id: string
  name: string
  designation?: string
  image: string
  alt: string
}

const teamMembers: TeamMember[] = [
  {
    id: 'owner',
    name: 'Owner',
    image: '/images/trainers/owner.jpg',
    alt: 'Owner of Goodlife Fitness Club & Gym',
  },
  {
    id: 'arvind-sir',
    name: 'Arvind Sir',
    designation: 'Personal Trainer',
    image: '/images/trainers/arvind-sir.jpg',
    alt: 'Arvind Sir - Personal Trainer at Goodlife Fitness Club & Gym',
  },
  {
    id: 'aditya-sir',
    name: 'Aditya Sir',
    designation: 'Trainer',
    image: '/images/trainers/aditya-sir.jpg',
    alt: 'Aditya Sir - Trainer at Goodlife Fitness Club & Gym',
  },
]

export function TeamShowcase() {
  return (
    <section className="section trainer-section" id="trainer">
      <div className="container">
        <div className="section-heading team-heading">
          <div>
            <p className="eyebrow">EXPERT GUIDANCE &amp; LEADERSHIP</p>
            <h2>
              MEET OUR<br />
              <em>TEAM.</em>
            </h2>
          </div>
          <p>
            Dedicated leadership and experienced coaching committed to your fitness journey at Goodlife Kumbhari.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              className="team-card"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="team-image-wrapper">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                  loading="lazy"
                  className="team-image"
                />
                <div className="team-image-overlay" aria-hidden="true" />
              </div>
              <div className="team-card-content">
                <h3 className="team-name">{member.name}</h3>
                {member.designation && (
                  <p className="team-designation">{member.designation}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
