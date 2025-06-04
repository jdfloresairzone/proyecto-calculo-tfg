interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const ChevronDownIcon: React.FC<Props> = ({width, height, "aria-label":label}) => {
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
            d="M31 9.54321C31 9.2963 30.7531 8.80247 30.5062 8.55556C29.7654 7.81481 29.0247 7.81481 28.5309 8.55556L15.9383 21.3951L3.34568 8.80247C3.09876 8.55555 2.60494 8.30864 2.35802 8.30864C2.11111 8.30864 1.61728 8.55555 1.37037 8.80247C0.876543 9.29629 0.876543 10.5309 1.37037 10.7778L14.9506 24.358C15.1975 24.6049 15.4444 24.8519 15.9383 24.8519C16.1852 24.8519 16.679 24.6049 16.9259 24.358L30.5062 10.7778C31 10.2839 31 10.037 31 9.54321Z" 
            fill="currentColor"
        />
      </svg>
    )
  }