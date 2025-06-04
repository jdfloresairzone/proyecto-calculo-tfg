interface Props {
    width?: number
    height?: number
    "aria-label": string
  }
  
  export const OptionsIcon: React.FC<Props> = ({ width, height, "aria-label": label }) => {
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
            d="M0.45459 16.4212C0.45459 18.2246 1.91652 19.6865 3.7199 19.6865C5.52328 19.6865 6.9852 18.2246 6.9852 16.4212C6.9852 14.6179 5.52328 13.1559 3.7199 13.1559C1.91652 13.1559 0.45459 14.6179 0.45459 16.4212Z" 
            fill="currentColor"
        />
        <path 
            d="M16.4546 19.6865C14.6512 19.6865 13.1893 18.2246 13.1893 16.4212C13.1893 14.6179 14.6512 13.1559 16.4546 13.1559C18.258 13.1559 19.7199 14.6179 19.7199 16.4212C19.7199 18.2246 18.258 19.6865 16.4546 19.6865Z" 
            fill="currentColor"
        />
        <path 
            d="M29.1893 19.6865C27.3859 19.6865 25.924 18.2246 25.924 16.4212C25.924 14.6179 27.3859 13.1559 29.1893 13.1559C30.9927 13.1559 32.4546 14.6179 32.4546 16.4212C32.4546 18.2246 30.9927 19.6865 29.1893 19.6865Z" 
            fill="currentColor"
        />
      </svg>
    )
  }