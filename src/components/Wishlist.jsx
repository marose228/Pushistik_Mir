import { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Wishlist = ({ onAddToCart }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  // Загрузка избранного из localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      const wishlistIds = JSON.parse(savedWishlist);
      const items = products.filter(product => wishlistIds.includes(product.id));
      setWishlistItems(items);
      setLikedProducts(wishlistIds);
    }
  }, []);

  const removeFromWishlist = (productId) => {
    const newWishlist = likedProducts.filter(id => id !== productId);
    setLikedProducts(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const addAllToCart = () => {
    wishlistItems.forEach(item => {
      onAddToCart(item);
    });
  };

  const clearWishlist = () => {
    setLikedProducts([]);
    setWishlistItems([]);
    localStorage.setItem('wishlist', JSON.stringify([]));
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  if (wishlistItems.length === 0) {
    return (
      <section id="wishlist" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-700 mb-3">Избранное пусто</h2>
            <p className="text-gray-500 mb-8">Добавляйте товары в избранное, чтобы не потерять их</p>
            <a 
              href="#catalog" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Перейти в каталог
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="wishlist" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
            <Heart className="w-4 h-4 text-pink-500" />
            <span className="text-purple-600 font-semibold text-sm">Сохраненные товары</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ❤️ Избранное
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Товары, которые вам понравились
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600">Всего товаров: {wishlistItems.length}</p>
          <div className="flex gap-3">
            <button
              onClick={addAllToCart}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold hover:scale-105 transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              Добавить всё в корзину
            </button>
            <button
              onClick={clearWishlist}
              className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-500 rounded-full text-sm font-semibold hover:bg-red-50 transition-all"
            >
              <Trash2 className="w-4 h-4" />
              Очистить всё
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isLiked={true}
              onLike={() => removeFromWishlist(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;