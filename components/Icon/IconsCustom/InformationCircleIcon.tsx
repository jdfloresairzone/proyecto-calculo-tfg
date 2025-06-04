interface Props {
  width?: number
  height?: number
  "aria-label": string
}

export const InformationCircleIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
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
        d="M16.7493 10.0178C16.5805 10.1972 16.3358 10.2874 16.0124 10.2874C15.689 10.2874 15.4443 10.1972 15.2802 10.0178C15.1152 9.83832 15.0336 9.61378 15.0336 9.34414C15.0336 9.0745 15.1152 8.84612 15.2802 8.66093C15.4443 8.47573 15.689 8.38265 16.0124 8.38265C16.3358 8.38265 16.5805 8.47573 16.7493 8.66093C16.9163 8.84612 17.0008 9.0745 17.0008 9.34414C17.0008 9.61378 16.9163 9.83832 16.7493 10.0178Z"
        fill="currentColor"
      />
      <path d="M15.1678 21.6441H16.8297V11.9227H15.1678V21.6441Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 16C1 24.2705 7.72851 31 15.999 31C24.2696 31 30.9981 24.2705 30.9981 16C30.9981 7.72947 24.2696 1 15.999 1C7.72851 1 1 7.72947 1 16ZM2.24654 16C2.24654 8.41749 8.41658 2.24841 15.9991 2.24841C23.5816 2.24841 29.7517 8.41749 29.7517 16C29.7517 23.5825 23.5816 29.7516 15.9991 29.7516C8.41658 29.7516 2.24654 23.5825 2.24654 16Z"
        fill="currentColor"
      />
    </svg>
  )
}
