import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Categories from './components/Categories';
import Catalog from './components/Catalog';
import Promo from './components/Promo';
import About from './components/About';
import Reviews from './components/Reviews';
import Telegram from './components/Telegram';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import WishlistModal from './components/WishlistModal';
import OrdersModal from './components/OrdersModal';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Эффект для анимации при скролле
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Загрузка корзины
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Загрузка количества избранного
  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setWishlistCount(wishlist.length);
    };
    
    updateWishlistCount();
    window.addEventListener('wishlistUpdated', updateWishlistCount);
    return () => window.removeEventListener('wishlistUpdated', updateWishlistCount);
  }, []);

  // Сохранение корзины
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Header 
        cartCount={cartCount} 
        onCartOpen={() => setIsCartOpen(true)}
        wishlistCount={wishlistCount}
        onWishlistOpen={() => setIsWishlistOpen(true)}
        onOrdersOpen={() => setIsOrdersOpen(true)}
      />
      <main className="pt-16">
        <Hero />
        <Advantages />
        <Categories />
        <Catalog onAddToCart={addToCart} />
        <Promo onAddToCart={addToCart} />
        <About />
        <Reviews />
        <Telegram />
      </main>
      <Footer />
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        onAddToCart={addToCart}
      />
      <OrdersModal
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
        onAddToCart={addToCart}
      />
    </div>
  );
}

export default App;