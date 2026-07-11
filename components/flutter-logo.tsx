export function FlutterLogo({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 256 317"
      className={className}
      style={style}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#47C5FB"
        d="M157.666 0 0 157.667l48.8 48.8L255.267 0zM156.567 145.397l-84.09 84.088 48.984 49.352 48.71-48.71 86.83-86.826z"
      />
      <path fill="#00569E" d="m120.461 278.837 37.205 37.205h97.601l-86.096-86.83z" />
      <path fill="#00B5F8" d="m71.938 229.669 48.71-48.71 48.79 48.706-48.71 48.712z" />
      <path
        fill="#00569E"
        d="M120.648 278.837a63.647 63.647 0 0 0 48.79-.16l-48.79-48.55z"
        opacity=".8"
      />
    </svg>
  )
}
