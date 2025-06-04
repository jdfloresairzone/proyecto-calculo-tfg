interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const Bars3Icon: React.FC<Props> = ({width, height, "aria-label":label}) => {
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
            d="M1.9 7H30.1C30.6 7 31 7.4 31 7.9C31 8.4 30.6 8.8 30.1 8.8H1.9C1.4 8.8 1 8.4 1 7.9C1 7.4 1.4 7 1.9 7Z" 
            fill="currentColor"
        />
        <path 
            d="M30.1 15.2H1.9C1.4 15.2 1 15.6 1 16.1C1 16.6 1.4 17 1.9 17H30.1C30.6 17 31 16.6 31 16.1C31 15.6 30.6 15.2 30.1 15.2Z" 
            fill="currentColor"
        />
        <path 
            d="M30.1 23.5H1.9C1.4 23.5 1 23.9 1 24.4C1 24.9 1.4 25.3 1.9 25.3H30.1C30.6 25.3 31 24.9 31 24.4C31 23.9 30.6 23.5 30.1 23.5Z" 
            fill="currentColor"
        />
      </svg>
    )
  }