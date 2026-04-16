import { useState } from 'react';
import { ShoppingCart, Menu, X, Heart, Package } from 'lucide-react';

const Header = ({ cartCount, onCartOpen, wishlistCount, onWishlistOpen, onOrdersOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="logo.png" className="w-10 h-10 rounded-xl object-cover" />
            <span className="font-serif text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ПушистикМир
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
              Главная
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#catalog" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
              Каталог
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#promo" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
              Акции
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
              Отзывы
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#footer" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 relative group">
              Контакты
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onOrdersOpen}
              className="relative p-2 hover:bg-purple-100 rounded-full transition-colors"
            >
              <Package className="w-6 h-6 text-gray-700" />
            </button>
            <button 
              onClick={onWishlistOpen}
              className="relative p-2 hover:bg-purple-100 rounded-full transition-colors"
            >
              <Heart className="w-6 h-6 text-gray-700" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button onClick={onCartOpen} className="relative p-2 hover:bg-purple-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-purple-100 rounded-full transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100 py-4 px-4 shadow-lg">
          <a href="#hero" className="block py-3 text-gray-700 hover:text-purple-600 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Главная
          </a>
          <a href="#catalog" className="block py-3 text-gray-700 hover:text-purple-600 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Каталог
          </a>
          <a href="#promo" className="block py-3 text-gray-700 hover:text-purple-600 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Акции
          </a>
          <a href="#reviews" className="block py-3 text-gray-700 hover:text-purple-600 font-medium border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>
            Отзывы
          </a>
          <a href="#footer" className="block py-3 text-gray-700 hover:text-purple-600 font-medium" onClick={() => setIsMenuOpen(false)}>
            Контакты
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;