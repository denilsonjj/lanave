import { ChevronRight, Pizza } from 'lucide-react'
import { business, bioLinks, images } from '../data/siteData'

export function BioPage() {
  return (
    <main className="bio-page">
      <div className="bio-card">
        <div className="bio-logo">
          <img src={images.logo} alt="Logo La Nave Restaurante e Pizzaria" />
        </div>
        <h1>{business.name}</h1>
        <p>{business.tagline}</p>
        <div className="bio-status">
          <span />
          Aberto hoje • {business.hours}
        </div>

        <a className="bio-banner" href={business.whatsapp} target="_blank" rel="noreferrer">
          <Pizza size={34} />
          <span>
            <strong>Destaque da semana</strong>
            <small>Sexta tem rodízio na La Nave</small>
          </span>
          <ChevronRight size={26} />
        </a>

        <nav className="bio-links">
          {bioLinks.map((link) => (
            <a
              className={link.featured ? 'featured' : ''}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              key={link.label}
            >
              <span className="bio-link-icon">
                <link.icon size={23} />
              </span>
              <strong>{link.label}</strong>
              <ChevronRight size={22} />
            </a>
          ))}
        </nav>

        <div className="bio-wave" />
        <span className="bio-location">{business.location}</span>
      </div>
    </main>
  )
}
