interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const ChevronLeftIcon: React.FC<Props> = ({width, height, "aria-label":label}) => {
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
            d="M22.7291 31C22.9925 31 23.5192 30.7531 23.7826 30.5062C24.5727 29.7654 24.5727 29.0247 23.7826 28.5309L10.0871 15.9383L23.5192 3.34568C23.7826 3.09876 24.046 2.60494 24.046 2.35802C24.046 2.11111 23.7826 1.61728 23.5192 1.37037C22.9925 0.876543 21.6756 0.876543 21.4122 1.37037L6.92665 14.9506C6.66328 15.1975 6.3999 15.4444 6.3999 15.9383C6.3999 16.1852 6.66328 16.679 6.92665 16.9259L21.4122 30.5062C21.939 31 22.2024 31 22.7291 31Z" 
            fill="currentColor"
        />
      </svg>
    )
  }