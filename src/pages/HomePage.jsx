import {
  CalendarDays,
  Camera,
  Check,
  Clock3,
  Compass,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Truck,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { ButtonLink } from '../components/ButtonLink'
import { Logo } from '../components/Logo'
import { SectionHeader } from '../components/SectionHeader'
import { business, highlights, images, mapDirectionsLink, menuCategories, videos } from '../data/siteData'

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#destaques">Destaques</a>
            <a href="#rodizio">Rodízio</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#localizacao">Localização</a>
          </nav>
          <ButtonLink href={business.orderLink} className="desktop-cta" target="_blank" rel="noreferrer">
            <MessageCircle size={17} />
            Fazer pedido
          </ButtonLink>
          <button
            className="icon-button mobile-only"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={23} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-head">
            <Logo compact />
            <button className="icon-button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <nav aria-label="Menu mobile">
            <a href="#destaques" onClick={() => setMenuOpen(false)}>Destaques</a>
            <a href="#rodizio" onClick={() => setMenuOpen(false)}>Rodízio</a>
            <a href="#cardapio" onClick={() => setMenuOpen(false)}>Cardápio</a>
            <a href="#localizacao" onClick={() => setMenuOpen(false)}>Localização</a>
          </nav>
          <ButtonLink href={business.orderLink} target="_blank" rel="noreferrer">
            <MessageCircle size={17} />
            Fazer pedido
          </ButtonLink>
        </div>
      </div>

      <main>
        <section className="hero-section" id="inicio">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">La Nave Restaurante e Pizzaria</p>
              <h1>{business.tagline}</h1>
              <p className="hero-text">{business.description}</p>
              <div className="hero-actions">
                <ButtonLink href={business.orderLink} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  Fazer pedido
                </ButtonLink>
              </div>
              <div className="info-chips" aria-label="Informações rápidas">
                <span><Clock3 size={15} /> {business.hours}</span>
                <span><Truck size={15} /> Delivery rápido</span>
                <span><CalendarDays size={15} /> Rodízio toda sexta</span>
              </div>
            </div>

            <div className="hero-media reveal delay-1">
              <img src={images.heroTable} alt="Pizza mussarela da La Nave" />
              <div className="hero-card">
                <Compass size={21} />
                <span>Aberto hoje</span>
                <strong>{business.hours}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section highlights-section" id="destaques">
          <div className="container">
            <SectionHeader
              eyebrow="Carro-chefe"
              title="Destaques da Casa"
              text="Uma vitrine simples do que a casa oferece, sem competir com a plataforma de pedidos."
            />
            <div className="highlight-grid">
              {highlights.map((item, index) => (
                <article
                  className="highlight-card reveal"
                  style={{ animationDelay: `${index * 90}ms` }}
                  key={item.title}
                >
                  <img src={item.image} alt={item.title} />
                  <div>
                    <item.icon size={21} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section video-section" id="videos">
          <div className="container video-layout">
            <div className="video-copy">
              <SectionHeader
                eyebrow="Conteúdo da casa"
                title="Vídeos que dão vontade de pedir"
                text="Um espaço para reels, campanhas com influencers e bastidores dos pratos que mais chamam atenção."
                align="left"
              />
              <div className="video-points">
                <span><Check size={16} /> Ideal para vídeos verticais</span>
                <span><Check size={16} /> Pode destacar campanhas e novidades</span>
                <span><Check size={16} /> Mantém o cliente dentro da experiência do site</span>
              </div>
              <ButtonLink href={business.orderLink} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Pedir após assistir
              </ButtonLink>
            </div>

            <div className="video-showcase reveal">
              <div className="video-frame">
                <video
                  src={videos.cartola}
                  autoPlay
                  loop
                  playsInline
                  muted
                  preload="metadata"
                  poster={images.esfihas}
                  aria-label="Vídeo da pizza de cartola La Nave"
                />
                <div className="video-overlay">
                  <span>Vídeo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rodizio-band" id="rodizio">
          <div className="container rodizio-content">
            <div>
              <p className="eyebrow">Destaque da semana</p>
              <h2>Sexta é dia de rodízio</h2>
              <p>Um espaço flexível para divulgar rodízio, promoções, novidades ou avisos especiais da La Nave.</p>
            </div>
            <ButtonLink href={business.whatsapp} target="_blank" rel="noreferrer">
              <CalendarDays size={18} />
              Chamar no WhatsApp
            </ButtonLink>
          </div>
        </section>

        <section className="section menu-section" id="cardapio">
          <div className="container menu-layout">
            <div>
              <SectionHeader
                eyebrow="Cardápio"
                title="Sabores para todos os momentos"
                text="O site apresenta as categorias e leva o cliente para o canal certo de pedido."
                align="left"
              />
              <div className="menu-actions">
                <ButtonLink href={business.orderLink} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  Abrir pedidos
                </ButtonLink>
              </div>
            </div>
            <div className="category-grid">
              {menuCategories.map((item) => (
                <a
                  href={business.orderLink}
                  className="category-tile"
                  target="_blank"
                  rel="noreferrer"
                  key={item.label}
                >
                  <item.icon size={26} />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section info-section" id="localizacao">
          <div className="container info-grid">
            <article className="soft-panel">
              <Clock3 size={26} />
              <h2>Funcionamento</h2>
              <div className="status-pill">
                <span />
                Aberto agora
              </div>
              <dl>
                <div>
                  <dt>Todos os dias</dt>
                  <dd>{business.hours}</dd>
                </div>
                <div>
                  <dt>Rodízio de sexta</dt>
                  <dd>A partir das 18h</dd>
                </div>
              </dl>
            </article>

            <article className="soft-panel location-panel">
              <MapPin size={26} />
              <h2>Localização</h2>
              <p>{business.address}</p>
              <div className="map-preview">
                <iframe
                  title="Mapa da La Nave Restaurante e Pizzaria"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="contact-row">
                <a
                  href={mapDirectionsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation size={16} /> Como chegar
                </a>
                <a href={business.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a href={business.instagram} target="_blank" rel="noreferrer">
                  <Camera size={16} /> Instagram
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Logo />
        <nav>
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#rodizio">Rodízio</a>
          <a href="/bio">Bio</a>
          <a href="/admin">Painel</a>
        </nav>
        <p>© 2026 La Nave Restaurante e Pizzaria. Todos os direitos reservados.</p>
      </footer>

      <a className="floating-order" href={business.orderLink} target="_blank" rel="noreferrer">
        <MessageCircle size={18} />
        Fazer pedido
      </a>
    </div>
  )
}
