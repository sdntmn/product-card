import React, { memo } from "react"

import "./ProductImage.css"

interface Props {
  image: string
  onClick?: () => void
  title: string
}

export const ProductImage: React.FC<Props> = memo(({ image, onClick, title }) =>
  image ? (
    <img alt={ title} className="product-image" src={image} />
  ) : (
    <img
      alt="No product available"
      className="product-image"
      src="./assets/notProduct.svg"
    />
  )
)

ProductImage.displayName = "ProductImage"
