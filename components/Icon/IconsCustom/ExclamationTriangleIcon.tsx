interface Props {
  width?: number
  height?: number
  "aria-label": string
}

export const ExclamationTriangleIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
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
        d="M17.1546 5.2941L29.2249 25.7613C29.9597 26.9158 29.5398 27.6505 28.0704 27.6505H3.82467C2.46019 27.6505 2.04035 26.9158 2.67011 25.7613L14.8454 5.2941C15.5802 4.03458 16.4198 4.03458 17.1546 5.2941ZM1.51555 25.0265C0.256033 27.1257 1.41059 29.015 3.82467 29.015H28.1753C30.5894 29.015 31.744 27.1257 30.4845 25.0265L18.4141 4.55938C17.1546 2.46019 14.9504 2.46019 13.6909 4.55938L1.51555 25.0265Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2653 19.6736C15.2653 20.0934 15.5802 20.4083 16 20.4083C16.4198 20.4083 16.7347 20.0934 16.7347 19.6736V10.2272C16.7347 9.80738 16.4198 9.4925 16 9.4925C15.5802 9.4925 15.2653 9.80738 15.2653 10.2272V19.6736Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2653 24.5017C15.2653 24.9216 15.5802 25.2364 16 25.2364C16.4198 25.2364 16.7347 24.9216 16.7347 24.5017V22.4025C16.7347 21.9827 16.4198 21.6678 16 21.6678C15.5802 21.6678 15.2653 21.9827 15.2653 22.4025V24.5017Z"
        fill="currentColor"
      />
    </svg>
  )
}
