interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const CheckIcon: React.FC<Props> = ({width, height, "aria-label":label}) => {
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
            d="M26.3389 8.45283C25.7351 7.84906 24.6785 7.84906 24.0747 8.45283L12.4521 20.1509L7.84833 15.5472C7.54644 15.2453 7.09361 15.0189 6.64078 15.0943C6.26342 15.0943 5.88606 15.2453 5.58418 15.5472C5.28229 15.8491 5.13135 16.3019 5.13135 16.7547C5.13135 17.1321 5.28229 17.5094 5.58418 17.8113L11.3955 23.5472C11.9993 24.1509 12.9804 24.1509 13.6596 23.5472L26.4898 10.717C27.0181 10.1132 27.0181 9.0566 26.3389 8.45283Z" 
            fill="currentColor"
        />
      </svg>
    )
  }