import { useState, useEffect } from 'react';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const WishlistModal = ({ isOpen, onClose, onAddToCart }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [hearts, setHearts] = useState([]);

  // Генерация летающих сердечек при открытии
  useEffect(() => {
    if (isOpen) {
      const floatingHearts = [];
      for (let i = 0; i < 30; i++) {
        floatingHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 4,
          size: 20 + Math.random() * 40,
          opacity: 0.3 + Math.random() * 0.4,
        });
      }
      setHearts(floatingHearts);
    } else {
      setHearts([]);
    }
  }, [isOpen]);

  // Загрузка избранного из localStorage
  const loadWishlist = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      const items = products.filter(product => wishlistIds.includes(product.id));
      setWishlistItems(items);
    } else {
      setWishlistItems([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadWishlist();
    }
  }, [isOpen]);

  // Слушаем изменения в избранном
  useEffect(() => {
    const handleWishlistUpdate = () => {
      loadWishlist();
    };
    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    return () => window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
  }, []);

  const removeFromWishlist = (productId) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const newWishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
    // Отправляем событие для обновления счетчика
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const addAllToCart = () => {
    wishlistItems.forEach(item => {
      onAddToCart(item);
    });
  };

  const clearWishlist = () => {
    localStorage.setItem('wishlist', JSON.stringify([]));
    setWishlistItems([]);
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Затемнение */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-fade-in" onClick={onClose} />
      
      {/* Летающие сердечки на фоне */}
      <div className="fixed inset-0 pointer-events-none z-[101] overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float-heart"
            style={{
              left: `${heart.left}%`,
              bottom: '-50px',
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            <Heart 
              className="text-pink-500" 
              style={{ 
                width: `${heart.size}px`, 
                height: `${heart.size}px`,
                opacity: heart.opacity,
                fill: '#ec4899',
              }} 
            />
          </div>
        ))}
      </div>

      {/* Вторая волна сердечек */}
      <div className="fixed inset-0 pointer-events-none z-[101] overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={`heart2-${i}`}
            className="absolute animate-float-heart-delayed"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-50px',
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${4 + Math.random() * 5}s`,
            }}
          >
            <Heart 
              className={`${Math.random() > 0.5 ? 'text-red-400' : 'text-purple-400'}`}
              style={{ 
                width: `${15 + Math.random() * 35}px`, 
                height: `${15 + Math.random() * 35}px`,
                opacity: 0.2 + Math.random() * 0.5,
                fill: Math.random() > 0.5 ? '#f43f5e' : '#a855f7',
              }} 
            />
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl max-h-[85vh] bg-white rounded-2xl shadow-2xl z-[102] overflow-hidden animate-modal-in">
        {/* Заголовок */}
        <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
              <Heart className="w-6 h-6 text-pink-500 absolute top-0 left-0 animate-ping opacity-75" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">❤️ Моё избранное</h2>
            {wishlistItems.length > 0 && (
              <span className="ml-2 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-1 animate-bounce">
                {wishlistItems.length}
              </span>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors hover:scale-110"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Содержимое */}
        <div className="overflow-y-auto p-5" style={{ maxHeight: 'calc(85vh - 80px)' }}>
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="relative inline-block">
                <Heart className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <Heart className="w-20 h-20 text-pink-300 absolute top-0 left-0 animate-ping opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Избранное пусто</h3>
              <p className="text-gray-500 mb-6">Добавляйте товары в избранное, нажимая на сердечко ❤️</p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all"
              >
                Продолжить покупки
              </button>
            </div>
          ) : (
            <>
              {/* Кнопки управления */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b">
                <p className="text-gray-600">Всего товаров: {wishlistItems.length}</p>
                <div className="flex gap-3">
                  <button
                    onClick={addAllToCart}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:scale-105 transition-all hover:shadow-lg"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Добавить всё
                  </button>
                  <button
                    onClick={clearWishlist}
                    className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-500 rounded-full text-sm font-semibold hover:bg-red-50 transition-all hover:scale-105"
                  >
                    <Trash2 className="w-4 h-4" />
                    Очистить всё
                  </button>
                </div>
              </div>

              {/* Сетка товаров - используем твой оригинальный ProductCard */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {wishlistItems.map((product) => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        @keyframes float-heart {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes float-heart-delayed {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(-360deg);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
        
        .animate-float-heart {
          animation: float-heart 4s ease-in-out infinite;
        }
        
        .animate-float-heart-delayed {
          animation: float-heart-delayed 5s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-bounce {
          animation: bounce 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default WishlistModal;