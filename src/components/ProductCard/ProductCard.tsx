import React from 'react';
import { Currency } from '../../mockData/mockData'
import { ProductImage } from '../ProductImage/ProductImage'

import './ProductCard.css';

const DIVISOR = 100;

interface Props {
  title: string;
  origin: string;
  price?: number;
  currency?: Currency;
  imageUrl: string;
}

export const ProductCard: React.FC<Props> = ({
  title,
  origin,
  price = 34900,
  currency = 'RUB',
  imageUrl,
}) => {

  const formatPrice = (price: number, currency: Currency): string => {
    const amount = price / DIVISOR;

    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="product-card">
      <ProductImage image={ imageUrl } title={ title }      />
      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{title}</h3>
      <p style={{ margin: '0 0 8px 0', color: '#666' }}>Страна: {origin}</p>
      <p style={{ margin: '0', fontWeight: 'bold', fontSize: '20px' }}>
        {formatPrice(price, currency)}
      </p>
    </div>
  );
};
