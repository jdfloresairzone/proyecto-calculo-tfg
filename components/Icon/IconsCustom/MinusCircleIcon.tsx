interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const MinusCircleIcon: React.FC<Props> = ({width, height, "aria-label":label}) => {
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
            d="M16 1C7.67808 1 1 7.67808 1 16C1 24.3219 7.67808 31 16 31C24.3219 31 31 24.3219 31 16C31 7.67808 24.3219 1 16 1ZM16 29.8699C8.39726 29.8699 2.13014 23.7055 2.13014 16C2.13014 8.29452 8.39726 2.13014 16 2.13014C23.6027 2.13014 29.8699 8.29452 29.8699 16C29.8699 23.7055 23.6027 29.8699 16 29.8699Z" 
            fill="currentColor"
        />
        <path 
            d="M24.7329 16.5137H7.2671C6.95888 16.5137 6.7534 16.3082 6.7534 16C6.7534 15.6918 6.95888 15.4863 7.2671 15.4863H24.7329C25.0411 15.4863 25.2465 15.6918 25.2465 16C25.2465 16.3082 25.0411 16.5137 24.7329 16.5137Z" 
            fill="currentColor"
        />
      </svg>
    )
  }