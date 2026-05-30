export function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`section-header ${align === 'left' ? 'left' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
