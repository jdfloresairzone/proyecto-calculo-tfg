interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const ChevronRightIcon: React.FC<Props> = ({width, height, "aria-label":label}) => {
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
            d="M10.5432 31C10.2963 31 9.80247 30.7531 9.55556 30.5062C8.81481 29.7654 8.81481 29.0247 9.55556 28.5309L22.3951 15.9383L9.80247 3.34568C9.55555 3.09876 9.30864 2.60494 9.30864 2.35802C9.30864 2.11111 9.55555 1.61728 9.80247 1.37037C10.2963 0.876543 11.5309 0.876543 11.7778 1.37037L25.358 14.9506C25.6049 15.1975 25.8519 15.4444 25.8519 15.9383C25.8519 16.1852 25.6049 16.679 25.358 16.9259L11.7778 30.5062C11.2839 31 11.037 31 10.5432 31Z" 
            fill="currentColor"
        />
      </svg>
    )
  }