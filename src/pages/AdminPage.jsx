import {
  BookOpen,
  CalendarDays,
  Check,
  Edit3,
  Eye,
  GripVertical,
  Link2,
  MapPin,
  Pizza,
  Plus,
  Save,
  Store,
} from 'lucide-react'
import { useState } from 'react'
import { AdminPanel } from '../components/AdminPanel'
import { Logo } from '../components/Logo'
import { bioLinks, business, images, menuCategories } from '../data/siteData'

const editableContent = {
  heroEyebrow: business.name,
  heroTitle: business.tagline,
  heroDescription: business.description,
  statusLabel: 'Aberto agora',
  highlightEyebrow: 'Destaque da semana',
  highlightTitle: 'Sexta é dia de rodízio',
  highlightDescription:
    'Um espaço flexível para divulgar rodízio, promoções, novidades ou avisos especiais da La Nave.',
  highlightCta: 'Chamar no WhatsApp',
  videoSectionTitle: 'Vídeos que dão vontade de pedir',
  videoSectionDescription:
    'Um espaço para reels, campanhas com influencers e bastidores dos pratos que mais chamam atenção.',
  videoBadge: 'Vídeo',
}

export function AdminPage() {
  const [links, setLinks] = useState(bioLinks)

  return (
    <main className="admin-page">
      <header className="admin-topbar">
        <Logo compact />
        <nav>
          <a className="active" href="/admin">Site</a>
          <a href="/bio">Bio</a>
          <a href="#cardapio-admin">Cardápio</a>
          <a href="#contato-admin">Contato</a>
        </nav>
        <div>
          <a href="/">Ver site</a>
          <button>
            <Save size={16} />
            Publicar alterações
          </button>
        </div>
      </header>

      <div className="admin-workspace">
        <section className="admin-editor">
          <div className="admin-title">
            <h1>Painel La Nave</h1>
            <p>Atualize exatamente os textos, links e destaques que aparecem no site e na bio.</p>
          </div>

          <AdminPanel icon={Edit3} title="Topo do site">
            <div className="admin-form-grid">
              <label>
                Nome acima do título
                <input defaultValue={editableContent.heroEyebrow} />
              </label>
              <label>
                Título principal
                <input defaultValue={editableContent.heroTitle} />
              </label>
              <label className="full">
                Texto de apoio
                <textarea defaultValue={editableContent.heroDescription} rows={2} />
              </label>
              <label>
                Botão principal
                <input defaultValue="Fazer pedido" />
              </label>
              <label>
                Link do botão
                <input defaultValue={business.orderLink} />
              </label>
            </div>
            <small>Esse conteúdo aparece no primeiro bloco da página inicial.</small>
          </AdminPanel>

          <AdminPanel icon={Store} title="Status de funcionamento">
            <div className="admin-form-grid">
              <label className="toggle-line">
                <input type="checkbox" defaultChecked />
                <span />
                {editableContent.statusLabel}
              </label>
              <label>
                Horário de hoje
                <input defaultValue={business.hours} />
              </label>
            </div>
            <small>Essa informação aparece no topo do site e da página da bio.</small>
          </AdminPanel>

          <AdminPanel icon={CalendarDays} title="Destaque do site e da bio">
            <div className="admin-form-grid">
              <label>
                Etiqueta
                <input defaultValue={editableContent.highlightEyebrow} />
              </label>
              <label>
                Título do destaque
                <input defaultValue={editableContent.highlightTitle} />
              </label>
              <label className="full">
                Descrição
                <textarea defaultValue={editableContent.highlightDescription} rows={3} />
              </label>
              <label>
                Texto do botão
                <input defaultValue={editableContent.highlightCta} />
              </label>
              <label>
                Link do botão
                <input defaultValue={business.whatsapp} />
              </label>
            </div>
            <small>Pode virar rodízio, promoção do dia, novidade, cupom ou aviso importante.</small>
          </AdminPanel>

          <AdminPanel icon={Pizza} title="Vídeo em destaque">
            <div className="admin-form-grid">
              <label>
                Título da seção
                <input defaultValue={editableContent.videoSectionTitle} />
              </label>
              <label>
                Selo no vídeo
                <input defaultValue={editableContent.videoBadge} />
              </label>
              <label className="full">
                Texto da seção
                <textarea defaultValue={editableContent.videoSectionDescription} rows={2} />
              </label>
              <label>
                Arquivo ou URL do vídeo
                <input defaultValue="/videos/pizza-cartola-lanave.mp4" />
              </label>
              <label className="mini-toggle admin-toggle-row">
                Vídeo ativo
                <input type="checkbox" defaultChecked />
                <span />
              </label>
            </div>
            <small>Esse bloco aparece na seção de vídeos automáticos do site.</small>
          </AdminPanel>

          <AdminPanel icon={Link2} title="Links da bio">
            <div className="link-manager">
              {links.map((link, index) => (
                <div className="link-edit-row" key={link.label}>
                  <GripVertical size={18} />
                  <input
                    value={link.label}
                    onChange={(event) => {
                      const next = [...links]
                      next[index] = { ...link, label: event.target.value }
                      setLinks(next)
                    }}
                  />
                  <input defaultValue={link.href} />
                  <label className="mini-toggle">
                    <input type="checkbox" defaultChecked />
                    <span />
                  </label>
                </div>
              ))}
            </div>
            <button className="ghost-button">
              <Plus size={16} />
              Adicionar link
            </button>
          </AdminPanel>

          <AdminPanel icon={BookOpen} title="Cardápio em destaque" id="cardapio-admin">
            <div className="admin-category-list">
              {menuCategories.map((item) => (
                <label key={item.label}>
                  <item.icon size={18} />
                  <input defaultValue={item.label} />
                  <span><Check size={14} /> visível</span>
                </label>
              ))}
            </div>
          </AdminPanel>

          <AdminPanel icon={MapPin} title="Dados de contato" id="contato-admin">
            <div className="admin-form-grid">
              <label>
                WhatsApp
                <input defaultValue={business.whatsapp} />
              </label>
              <label>
                Instagram
                <input defaultValue={business.instagram} />
              </label>
              <label className="full">
                Endereço
                <input defaultValue={business.address} />
              </label>
              <label className="full">
                Link do Google Maps
                <input
                  defaultValue={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery)}`}
                />
              </label>
            </div>
          </AdminPanel>
        </section>

        <aside className="admin-preview">
          <div className="preview-heading">
            <span>Preview dos blocos editáveis</span>
            <strong>Site + Bio</strong>
          </div>

          <div className="mini-site">
            <img src={images.logo} alt="" />
            <p>{editableContent.heroEyebrow}</p>
            <h3>{editableContent.heroTitle}</h3>
            <small>{editableContent.heroDescription}</small>
            <a>Fazer pedido</a>
            <div>
              <span>{business.hours}</span>
              <span>Delivery rápido</span>
            </div>
          </div>

          <div className="mini-highlight">
            <span>{editableContent.highlightEyebrow}</span>
            <strong>{editableContent.highlightTitle}</strong>
            <small>{editableContent.highlightDescription}</small>
          </div>

          <div className="mini-bio">
            <img src={images.logo} alt="" />
            <h3>{business.shortName}</h3>
            <p>Restaurante e Pizzaria em Igarassu</p>
            <span>{editableContent.highlightTitle}</span>
            <a>Pedir no WhatsApp</a>
            <button>Nossa localização</button>
          </div>
          <a className="preview-link" href="/bio">
            <Eye size={16} />
            Abrir preview
          </a>
        </aside>
      </div>
    </main>
  )
}
