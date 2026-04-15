import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState(false);

  // Проверяем, есть ли товар в избранном при загрузке
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsLiked(wishlist.includes(product.id));
  }, [product.id]);

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    let newWishlist;
    
    if (isLiked) {
      newWishlist = wishlist.filter(id => id !== product.id);
    } else {
      newWishlist = [...wishlist, product.id];
    }
    
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setIsLiked(!isLiked);
    
    // Показываем уведомление
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in';
    notification.textContent = isLiked ? '🗑️ Товар удален из избранного' : '❤️ Товар добавлен в избранное';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 card-tilt">
      <div className="relative h-48 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            🐾
          </div>
        )}
        {product.badge && (
          <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-bold text-white shadow-lg ${
            product.badge === 'Хит' ? 'bg-gradient-to-r from-red-500 to-orange-500' : 
            product.badge === 'Новинка' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 
            'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}>
            {product.badge}
          </span>
        )}
        <button 
          onClick={toggleLike}
          className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all hover:scale-110 z-10"
        >
          <Heart className={`w-4 h-4 transition-all duration-300 ${isLiked ? 'fill-pink-500 text-pink-500' : 'text-gray-500'}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
        </div>
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 min-h-[56px] text-sm hover:text-purple-600 transition-colors cursor-pointer">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs mb-2">{product.category}</p>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-purple-600">{product.price}₽</span>
            {product.oldPrice && <span className="text-gray-400 line-through text-sm">{product.oldPrice}₽</span>}
          </div>
          {product.oldPrice && (
            <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          )}
        </div>
        <button 
          onClick={() => onAddToCart(product)} 
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm group"
        >
          <ShoppingCart className="w-4 h-4 group-hover:animate-bounce" />
          В корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;