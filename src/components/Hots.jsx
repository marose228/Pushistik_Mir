import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const Hots = ({ onAddToCart }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const hotProducts = products.slice(0, 8);

  return (
    <section id="hots" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-purple-600 font-semibold text-sm">Лучшие предложения</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🔥 Хиты продаж
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Самые популярные товары у наших покупателей
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotProducts.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>

        {visibleCount < hotProducts.length && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setVisibleCount(prev => prev + 4)} 
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-500 text-purple-600 rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300"
            >
              Показать ещё
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hots;