import {
  Camera,
  CalendarDays,
  Eye,
  GripVertical,
  Link2,
  MapPin,
  Save,
  Store,
  Upload,
} from 'lucide-react'
import { useState } from 'react'
import { AdminPanel } from '../components/AdminPanel'
import { Logo } from '../components/Logo'
import { bioLinks, business, images } from '../data/siteData'

const editableContent = {
  statusLabel: 'Aberto agora',
  highlightEyebrow: 'Destaque da semana',
  highlightTitle: 'Sexta é dia de rodízio',
  highlightDescription:
    'Um espaço flexível para divulgar rodízio, promoções, novidades ou avisos especiais da La Nave.',
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
        <div className="admin-actions">
          <a href="/">Ver site</a>
          <a href="/bio">Ver bio</a>
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
            <p>Atualize apenas o que muda com frequência: fotos, vídeo, destaque, links e contato.</p>
          </div>

          <AdminPanel icon={Upload} title="Fotos e vídeo">
            <div className="admin-form-grid">
              <label>
                Logo da empresa
                <input defaultValue="/images/logolanave.jpg" />
              </label>
              <label>
                Foto principal do site
                <input defaultValue="/images/pizza.jpg" />
              </label>
              <label>
                Foto de destaque
                <input defaultValue="/images/esfiha-kitkat.jpg" />
              </label>
              <label>
                Vídeo automático
                <input defaultValue="/videos/pizza-cartola-lanave.mp4" />
              </label>
              <label className="mini-toggle admin-toggle-row">
                Vídeo ativo
                <input type="checkbox" defaultChecked />
                <span />
              </label>
              <label>
                Selo do vídeo
                <input defaultValue={editableContent.videoBadge} />
              </label>
            </div>
            <small>Essas mídias alimentam o topo do site, a bio e a seção de vídeo automático.</small>
          </AdminPanel>

          <AdminPanel icon={Store} title="Status e horário">
            <div className="admin-form-grid">
              <label className="toggle-line">
                <input type="checkbox" defaultChecked />
                <span />
                {editableContent.statusLabel}
              </label>
              <label>
                Horário exibido
                <input defaultValue={business.hours} />
              </label>
            </div>
            <small>Esse status aparece no site e na página da bio.</small>
          </AdminPanel>

          <AdminPanel icon={CalendarDays} title="Destaque flexível">
            <div className="admin-form-grid">
              <label>
                Etiqueta
                <input defaultValue={editableContent.highlightEyebrow} />
              </label>
              <label>
                Título
                <input defaultValue={editableContent.highlightTitle} />
              </label>
              <label className="full">
                Descrição
                <textarea defaultValue={editableContent.highlightDescription} rows={3} />
              </label>
              <label>
                Texto do botão
                <input defaultValue="Chamar no WhatsApp" />
              </label>
              <label>
                Link do botão
                <input defaultValue={business.whatsapp} />
              </label>
            </div>
            <small>Pode ser rodízio, promoção do dia, combo, aviso ou novidade.</small>
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
            <small>Esses botões aparecem na página /bio.</small>
          </AdminPanel>

          <AdminPanel icon={MapPin} title="Contato e localização">
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
                Busca do Google Maps
                <input defaultValue={business.mapQuery} />
              </label>
            </div>
          </AdminPanel>
        </section>

        <aside className="admin-preview">
          <div className="preview-heading">
            <span>Preview do conteúdo</span>
            <strong>Site + Bio</strong>
          </div>

          <div className="mini-site">
            <img src={images.logo} alt="" />
            <p>{business.name}</p>
            <h3>{business.tagline}</h3>
            <small>{business.description}</small>
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
            <a>Fazer pedido</a>
            <button>Localização</button>
          </div>

          <a className="preview-link" href="/bio">
            <Eye size={16} />
            Abrir bio
          </a>
          <a className="preview-link" href="/">
            <Camera size={16} />
            Abrir site
          </a>
        </aside>
      </div>
    </main>
  )
}
