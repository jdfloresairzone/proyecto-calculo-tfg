import React from "react"
import NextImage from "next/image"
import { Image } from "@lib/cms/domain/layout"

interface Props extends Image {
  href: string
  target: string
}

export const Logo: React.FC<Props> = ({ src, title, href, target }) => {
  return (
    <a href={href} target={target}>
      <NextImage src={src} alt={title} width={200} height={50} />
    </a>
  )
}
