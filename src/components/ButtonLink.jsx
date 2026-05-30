export function ButtonLink({ children, variant = 'primary', className = '', ...props }) {
  return (
    <a className={`btn btn-${variant} ${className}`} {...props}>
      {children}
    </a>
  )
}
