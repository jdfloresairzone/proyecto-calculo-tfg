interface Props {
  width?: number
  height?: number
  "aria-label": string
}

export const DotIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
  return (
    <svg
      width={width}
      height={height}
      className="text-inherit"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
      role="img"
    >
      <circle cx="12" cy="12" r="9.75" />
    </svg>
  )
}
