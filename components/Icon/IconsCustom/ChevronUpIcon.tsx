interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const ChevronUpIcon: React.FC<Props> = ({width, height, "aria-label":label}) => {
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
            d="M1 23.3086C1 23.5556 1.24692 24.0494 1.49383 24.2963C1.98766 24.7901 2.72839 25.037 3.46914 24.2963L16.0617 11.4568L28.6543 24.0494C29.3951 24.7901 30.1358 24.7901 30.6296 24.0494C31.1235 23.5556 31.1235 22.321 30.6296 22.0741L17.0494 8.49383C16.8025 8.24691 16.5556 8 16.0617 8C15.8148 8 15.321 8.24691 15.0741 8.49383L1.49383 22.0741C1 22.5679 1 22.8148 1 23.3086Z" 
            fill="currentColor"
        />
      </svg>
    )
  }