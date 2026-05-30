import {
  BookOpen,
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
            <p>Atualize as informações do site e do link da bio em poucos minutos.</p>
          </div>

          <AdminPanel icon={Store} title="Status de funcionamento">
            <div className="admin-form-grid">
              <label className="toggle-line">
                <input type="checkbox" defaultChecked />
                <span />
                Aberto agora
              </label>
              <label>
                Horário de hoje
                <input defaultValue={business.hours} />
              </label>
            </div>
            <small>Essa informação aparece no topo do site e da página da bio.</small>
          </AdminPanel>

          <AdminPanel icon={Edit3} title="Destaque do dia">
            <div className="panel-head-action">
              <label>
                Mensagem do destaque
                <textarea defaultValue="Sexta tem rodízio na La Nave" rows={3} />
              </label>
              <label className="mini-toggle">
                <input type="checkbox" defaultChecked />
                <span />
              </label>
            </div>
          </AdminPanel>

          <AdminPanel icon={Pizza} title="Rodízio de sexta">
            <div className="admin-split">
              <div className="field-stack">
                <label>
                  Título do banner
                  <input defaultValue="Sexta é dia de rodízio" />
                </label>
                <label>
                  Descrição
                  <textarea
                    defaultValue="Reúna a família e os amigos para aproveitar uma noite especial na La Nave."
                    rows={3}
                  />
                </label>
                <label>
                  Link de reserva
                  <input defaultValue="https://wa.me/..." />
                </label>
              </div>
              <div className="banner-preview">
                <span>Preview do banner</span>
                <strong>Sexta é dia de rodízio</strong>
                <small>Toda sexta na La Nave.</small>
              </div>
            </div>
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
          <div className="preview-tabs">
            <button>Site</button>
            <button className="active">Bio</button>
          </div>
          <div className="mini-bio">
            <img src={images.logo} alt="" />
            <h3>{business.shortName}</h3>
            <p>Restaurante e Pizzaria em Igarassu</p>
            <span>Sexta tem rodízio na La Nave.</span>
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
