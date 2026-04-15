import { useState, useEffect } from 'react';
import { Clock, Gift, Sparkles } from 'lucide-react';
import { promoProducts } from '../data/products';

const Promo = ({ onAddToCart }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="promo" className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 relative overflow-hidden">
      {/* Статичные декоративные элементы - без анимации */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/5"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/5"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-white/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-4">
            <Gift className="w-4 h-4 text-white" />
            <span className="text-white font-semibold text-sm">Ограниченное предложение</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Супер-акция недели!
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Успейте купить со скидкой до 30%
          </p>
        </div>

        {/* Таймер */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="bg-white/20 backdrop-blur rounded-xl px-6 py-3 text-center hover:bg-white/30 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-white">{String(value).padStart(2, '0')}</div>
              <div className="text-white/80 text-sm">{key === 'hours' ? 'Часов' : key === 'minutes' ? 'Минут' : 'Секунд'}</div>
            </div>
          ))}
        </div>

        {/* Товары по акции */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promoProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row hover:scale-105 transition-all duration-300 group">
              <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-4xl">
                    🎁
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                  -{product.discount}%
                </div>
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-semibold text-purple-600">ГОРЯЧЕЕ ПРЕДЛОЖЕНИЕ</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-purple-600">{product.price}₽</span>
                  <span className="text-gray-400 line-through">{product.oldPrice}₽</span>
                </div>
                <button 
                  onClick={() => onAddToCart({ ...product, id: `promo-${product.id}`, price: product.price })} 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Купить со скидкой
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo;