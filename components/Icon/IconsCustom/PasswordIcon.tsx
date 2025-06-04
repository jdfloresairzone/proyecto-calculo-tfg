interface Props {
  width?: number
  height?: number
  "aria-label": string
}

export const PasswordIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
  return (
    <svg
      width={width}
      height={height}
      className="text-inherit"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
      role="img"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7157 7.46667C10.0269 7.46667 5.16855 11.0052 3.2002 16C5.16855 20.9949 10.0269 24.5333 15.7157 24.5333C21.4046 24.5333 26.2629 20.9949 28.2313 16C26.2629 11.0052 21.4046 7.46667 15.7157 7.46667ZM15.7156 21.6889C12.5753 21.6889 10.0267 19.1402 10.0267 16C10.0267 12.8597 12.5753 10.3111 15.7156 10.3111C18.8559 10.3111 21.4045 12.8597 21.4045 16C21.4045 19.1402 18.8559 21.6889 15.7156 21.6889ZM12.3025 16C12.3025 14.1113 13.8271 12.5867 15.7158 12.5867C17.6045 12.5867 19.1292 14.1113 19.1292 16C19.1292 17.8887 17.6045 19.4133 15.7158 19.4133C13.8271 19.4133 12.3025 17.8887 12.3025 16Z"
        fill="currentColor"
      />
    </svg>
  )
}
