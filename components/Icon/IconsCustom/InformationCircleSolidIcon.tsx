interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const InformationCircleSolidIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
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
            d="M16 1C7.7 1 1 7.7 1 16C1 24.3 7.7 31 16 31C24.3 31 31 24.3 31 16C31 7.7 24.3 1 16 1ZM16.9 21.9H15.2V11.8H16.9V21.9ZM16.8 9.8C16.6 10 16.4 10 16 10C15.7 10 15.4 9.9 15.2 9.7C15.1 9.6 15 9.3 15 9.1C15 8.9 15.1 8.6 15.3 8.4C15.5 8.2 15.7 8.1 16.1 8.1C16.4 8.1 16.7 8.2 16.9 8.4C17 8.5 17 8.8 17 9.1C17 9.4 17 9.6 16.8 9.8Z" 
            fill="currentColor"
        />
      </svg>
    )
  }