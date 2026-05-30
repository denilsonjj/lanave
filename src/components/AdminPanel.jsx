export function AdminPanel({ icon: Icon, title, children, id }) {
  return (
    <section className="admin-panel" id={id}>
      <h2>
        <Icon size={23} />
        {title}
      </h2>
      {children}
    </section>
  )
}
