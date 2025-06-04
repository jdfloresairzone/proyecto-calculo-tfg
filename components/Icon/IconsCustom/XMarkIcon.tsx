interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const XMarkIcon: React.FC<Props> = ({width, height, "aria-label":label}) => {
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
            d="M18.4689 16.0295L24.5279 9.97049C25.1574 9.2623 25.1574 8.23934 24.5279 7.53115C23.8197 6.90164 22.7967 6.90164 22.0885 7.53115L16.0295 13.5902L9.97049 7.53115C9.2623 6.82295 8.16066 6.82295 7.53115 7.53115C6.82295 8.16066 6.82295 9.2623 7.53115 9.97049L13.5902 16.0295L7.53115 22.0885C6.90164 22.7967 6.90164 23.8197 7.53115 24.5279C8.23934 25.1574 9.2623 25.1574 9.97049 24.5279L16.0295 18.4689L22.0885 24.5279C22.7967 25.1574 23.8984 25.0787 24.5279 24.3705C25.0787 23.741 25.0787 22.7967 24.5279 22.1672L18.4689 16.0295Z" 
            fill="currentColor"
        />
      </svg>
    )
  }