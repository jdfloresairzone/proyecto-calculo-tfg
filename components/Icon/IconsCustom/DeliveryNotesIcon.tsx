interface Props {
  width?: number
  height?: number
  "aria-label": string
}

export const DeliveryNotesIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
  return (
    <svg
      width={width}
      height={height}
      className="text-inherit"
      viewBox="0 0 23 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={label}
      role="img"
    >
      <path
        d="M22.9001 30H0.100098V19.4H1.3001V28.8H21.7001V4.7L18.0001 1.2H1.3001V15.4H0.100098V0H18.4001L22.9001 4.2V30Z"
        fill="currentColor"
      />
      <path
        d="M22.3001 5H18.2001C17.9001 5 17.6001 4.7 17.6001 4.4V0.6C17.6001 0.4 17.7001 0.1 18.0001 0.1C18.2001 5.21541e-08 18.4001 7.45058e-08 18.6001 0.2L22.7001 4C22.9001 4.2 22.9001 4.4 22.8001 4.7C22.8001 4.9 22.5001 5 22.3001 5ZM18.8001 3.8H20.8001L18.8001 1.9V3.8Z"
        fill="currentColor"
      />
      <path d="M17.8001 7.6H5.5001V8.8H17.8001V7.6Z" fill="currentColor" />
      <path d="M17.8001 10.5H5.5001V11.7H17.8001V10.5Z" fill="currentColor" />
      <path d="M17.8001 13.4H5.5001V14.6H17.8001V13.4Z" fill="currentColor" />
      <path d="M10.4001 19H5.5001V20.2H10.4001V19Z" fill="currentColor" />
      <path d="M11.5001 27.7L7.8001 24L8.6001 23.1L11.5001 26L20.1001 17.4L20.9001 18.3L11.5001 27.7Z" fill="currentColor" />
    </svg>
  )
}
