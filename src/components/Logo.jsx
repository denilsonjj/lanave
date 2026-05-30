import { business, images } from '../data/siteData'

export function Logo({ compact = false }) {
  return (
    <a className="logo" href="/" aria-label="Página inicial">
      <span className="logo-mark">
        <img src={images.logo} alt="" />
      </span>
      <span>
        <strong>{business.shortName}</strong>
        {!compact && <small>Restaurante e Pizzaria</small>}
      </span>
    </a>
  )
}
