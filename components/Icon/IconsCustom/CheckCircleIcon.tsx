interface Props {
  width?: number
  height?: number
  "aria-label": string
}

export const CheckCircleIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
  return (
    <svg
      width={width}
      height={height}
      aria-label={label}
      role="img"
      className="text-inherit"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0C7.19289 0 0 7.19289 0 16C0 24.8071 7.19289 32 16 32C24.8071 32 32 24.8071 32 16C32 7.19289 24.8071 0 16 0ZM16 29.6563C8.48326 29.6563 2.34311 23.5159 2.34311 15.9994C2.34311 8.48296 8.48356 2.34252 16 2.34252C23.5164 2.34252 29.6569 8.48296 29.6569 15.9994C29.6569 23.5159 23.5164 29.6563 16 29.6563ZM12.1597 22.9508C11.7833 22.9508 11.4208 22.8008 11.1541 22.5342L6.51798 17.898C6.03742 17.4175 5.9277 16.6577 6.30132 16.0924C6.81661 15.3133 7.87631 15.2355 8.50271 15.8619L12.0123 19.3715C12.0943 19.4535 12.229 19.4535 12.3109 19.3715L22.2096 9.47285C22.8318 8.85063 23.8943 8.92562 24.411 9.70341C24.7846 10.2687 24.6735 11.0298 24.1943 11.509L13.168 22.5353C12.9013 22.802 12.5388 22.952 12.1624 22.952L12.1597 22.9508Z"
        fill="currentColor"
      />
    </svg>
  )
}
