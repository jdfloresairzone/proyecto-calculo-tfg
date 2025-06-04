interface Props {
  width?: number
  height?: number
  "aria-label": string
}

export const PencilIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={width}
      height={height}
      aria-label={label}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 9.63555C31 9.52992 31 9.42428 30.8944 9.31865L22.7606 1.18485C22.5493 0.973581 22.338 0.973581 22.1268 1.18485L1 22.206V30.9736H9.7676L30.7887 9.95245C30.8944 9.84682 31 9.74119 31 9.63555ZM2.47887 29.4947V22.206L9.7676 29.4947H2.47887ZM10.6127 28.2271L3.74648 21.3609L18.4296 6.67781L25.2958 13.544L10.6127 28.2271ZM26.3521 12.4877L19.4859 5.62147L22.338 2.66372L29.2042 9.52992L26.3521 12.4877Z"
        fill="currentColor"
      />
    </svg>
  )
}
