import React from 'react';
import './App.css';
import { ProductCard } from './components/ProductCard/ProductCard'
import { data } from './mockData/mockData'

const App: React.FC = () => {
  return (
    <div className="app">
       {data.map((product, index) => (
        <ProductCard
          key={product.id}
          title={product.title}
          origin={product.origin}
          price={product.price}
          currency={product.currency}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
