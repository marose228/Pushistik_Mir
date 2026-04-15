import { useState, useEffect } from 'react';
import { Search, Filter, X, Star, ShoppingCart, Heart } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const Catalog = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Все товары');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]);

  // Загрузка избранного из localStorage
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setLikedProducts(wishlist);
  }, []);

  // Фильтрация товаров
  let filteredProducts = products.filter(product => {
    if (selectedCategory !== 'Все товары' && product.category !== selectedCategory) {
      return false;
    }
    if (product.price < priceRange.min || product.price > priceRange.max) {
      return false;
    }
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Сортировка
  switch (sortBy) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filteredProducts.sort((a, b) => (b.badge === 'Хит' ? 1 : -1));
  }

  const toggleLike = (productId) => {
    let newWishlist;
    if (likedProducts.includes(productId)) {
      newWishlist = likedProducts.filter(id => id !== productId);
    } else {
      newWishlist = [...likedProducts, productId];
    }
    
    setLikedProducts(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    
    // Отправляем событие для обновления счетчика в шапке
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  const clearFilters = () => {
    setSelectedCategory('Все товары');
    setPriceRange({ min: 0, max: 2000 });
    setSearchQuery('');
    setSortBy('popular');
  };

  return (
    <section id="catalog" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🛍️ Каталог товаров
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Более {products.length} товаров для ваших питомцев
          </p>
        </div>

        {/* Поиск и фильтры */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-xl hover:bg-purple-50 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Фильтры
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            >
              <option value="popular">По популярности</option>
              <option value="price-asc">По возрастанию цены</option>
              <option value="price-desc">По убыванию цены</option>
              <option value="rating">По рейтингу</option>
            </select>
          </div>

          <div className={`${showFilters ? 'block' : 'hidden md:block'} bg-white rounded-xl p-4 shadow-md transition-all`}>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-700 mb-2">Категории</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 ${
                        selectedCategory === cat.name
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat.icon} {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-64">
                <h3 className="font-semibold text-gray-700 mb-2">Цена</h3>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="от"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="number"
                    placeholder="до"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="self-end px-4 py-2 text-purple-600 hover:text-purple-700 transition-colors hover:scale-105"
              >
                <X className="w-5 h-5 inline" /> Сбросить
              </button>
            </div>
          </div>
        </div>

        {/* Результаты */}
        <div className="mb-4 text-gray-600">
          Найдено товаров: {filteredProducts.length}
        </div>

        {/* Сетка товаров */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl">
            <p className="text-gray-500 text-lg">Товары не найдены</p>
            <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                isLiked={likedProducts.includes(product.id)}
                onLike={() => toggleLike(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;