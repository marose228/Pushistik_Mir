import { X, Trash2, ShoppingBag, CreditCard, Truck } from 'lucide-react';
import { useState } from 'react';

const CartSidebar = ({ isOpen, onClose, cart, onRemoveFromCart, onUpdateQuantity, onClearCart }) => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orderData, setOrderData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);
  const [fireworks, setFireworks] = useState([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryPrice = total >= 2000 ? 0 : 200;
  const finalTotal = total + deliveryPrice;

  // Функция для создания фейерверка
  const createFirework = () => {
    const colors = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#06b6d4', '#a855f7'];
    const newFireworks = [];
    
    for (let i = 0; i < 50; i++) {
      newFireworks.push({
        id: Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        delay: Math.random() * 0.5,
        duration: Math.random() * 1 + 1,
      });
    }
    
    setFireworks(newFireworks);
    
    // Удаляем фейерверк через 3 секунды
    setTimeout(() => {
      setFireworks([]);
    }, 3000);
  };

  const handleInputChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitOrder = () => {
    if (!orderData.name || !orderData.phone || !orderData.address) {
      alert('Пожалуйста, заполните все обязательные поля!');
      return;
    }

    setIsSubmitting(true);

    // Сохраняем заказ в localStorage
    const order = {
      id: Date.now(),
      date: new Date().toLocaleString('ru-RU'),
      customer: orderData,
      items: cart,
      total: finalTotal,
      delivery: deliveryPrice
    };

    const ordersHistory = JSON.parse(localStorage.getItem('ordersHistory') || '[]');
    ordersHistory.push(order);
    localStorage.setItem('ordersHistory', JSON.stringify(ordersHistory));

    console.log('Новый заказ:', order);
    
    // Сохраняем последний заказ для отображения
    setLastOrder(order);
    
    // Очищаем корзину
    onClearCart();
    
    setIsSubmitting(false);
    setOrderSubmitted(true);
    
    // Запускаем фейерверк
    createFirework();
  };

  // Закрыть окно с благодарностью
  const closeThankYou = () => {
    setOrderSubmitted(false);
    setLastOrder(null);
    setShowCheckoutModal(false);
    onClose();
    setOrderData({ name: '', phone: '', address: '', comment: '' });
    setFireworks([]);
  };

  // Страница "Спасибо за заказ" с фейерверком
  if (orderSubmitted && lastOrder) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeThankYou} />
        
        {/* Фейерверк */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {fireworks.map((fw) => (
            <div
              key={fw.id}
              className="absolute rounded-full animate-firework"
              style={{
                left: `${fw.left}%`,
                top: `${fw.top}%`,
                backgroundColor: fw.color,
                width: `${fw.size}px`,
                height: `${fw.size}px`,
                animationDelay: `${fw.delay}s`,
                animationDuration: `${fw.duration}s`,
                boxShadow: `0 0 ${fw.size * 2}px ${fw.color}`,
              }}
            />
          ))}
        </div>
        
        {/* Дополнительные искры */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={`spark-${i}`}
              className="absolute rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Конфетти */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={`confetti-${i}`}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
                width: `${Math.random() * 10 + 4}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
        
        {/* Модальное окно */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-modal-in z-10">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3 animate-slide-up">Спасибо за заказ! 🎉</h2>
          <p className="text-gray-600 text-lg mb-2 animate-slide-up delay-100">Мы очень ценим ваше доверие!</p>
          <p className="text-gray-500 mb-6 animate-slide-up delay-200">Наш менеджер свяжется с вами в ближайшее время для подтверждения заказа.</p>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6 animate-slide-up delay-300">
            <p className="text-sm text-gray-600">Номер заказа: #{lastOrder.id.toString().slice(-8)}</p>
            <p className="text-sm text-gray-600">Сумма заказа: {lastOrder.total}₽</p>
            <p className="text-sm text-gray-600">Дата: {lastOrder.date}</p>
          </div>
          <button
            onClick={closeThankYou}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 animate-pulse-glow"
          >
            Продолжить покупки
          </button>
          <p className="text-gray-400 text-sm mt-4 animate-slide-up delay-400">Ждем вас снова в ПушистикМир! 🐾</p>
        </div>
        
        <style>{`
          @keyframes firework {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            50% {
              transform: scale(3);
              opacity: 0.8;
            }
            100% {
              transform: scale(5);
              opacity: 0;
            }
          }
          
          @keyframes sparkle {
            0% {
              transform: scale(0) rotate(0deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.5) rotate(180deg);
              opacity: 1;
            }
            100% {
              transform: scale(0) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes confetti {
            0% {
              transform: translateY(-10%) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
          
          @keyframes bounce-gentle {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes modal-in {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-firework {
            animation: firework 1.5s ease-out forwards;
          }
          
          .animate-sparkle {
            animation: sparkle 1s ease-out forwards;
          }
          
          .animate-confetti {
            animation: confetti 3s ease-in forwards;
          }
          
          .animate-bounce-gentle {
            animation: bounce-gentle 0.8s ease-in-out infinite;
          }
          
          .animate-slide-up {
            animation: slide-up 0.5s ease-out forwards;
            opacity: 0;
          }
          
          .animate-pulse-glow {
            animation: pulseGlow 1.5s ease-in-out infinite;
          }
          
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
            }
            50% {
              box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);
            }
          }
          
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {/* Затемнение для боковой корзины */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}
      
      {/* Боковая корзина */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Заголовок */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-500" />
            Корзина
            {cart.length > 0 && (
              <span className="text-sm text-gray-400 ml-1">({cart.reduce((sum, i) => sum + i.quantity, 0)} товаров)</span>
            )}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Список товаров */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Корзина пуста</p>
              <p className="text-gray-400 text-sm mt-2">Добавьте товары, чтобы продолжить</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-2xl">🐾</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 text-sm line-clamp-2">{item.name}</h4>
                    <p className="text-purple-600 font-bold mt-1">{item.price}₽</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} 
                        className="w-7 h-7 bg-gray-200 rounded-full hover:bg-purple-200 transition-colors font-bold"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} 
                        className="w-7 h-7 bg-gray-200 rounded-full hover:bg-purple-200 transition-colors font-bold"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => onRemoveFromCart(item.id)} 
                        className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Итого и оформление */}
        {cart.length > 0 && (
          <div className="border-t p-4">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Товары ({cart.reduce((sum, i) => sum + i.quantity, 0)} шт.):</span>
                <span>{total}₽</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Доставка:</span>
                <span className={total >= 2000 ? 'text-green-600' : 'text-orange-600'}>
                  {total >= 2000 ? 'Бесплатно' : `${deliveryPrice}₽`}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
                <span>Итого:</span>
                <span className="text-2xl font-bold text-purple-600">{finalTotal}₽</span>
              </div>
            </div>
            <button 
              onClick={() => setShowCheckoutModal(true)}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Оформить заказ
            </button>
            {total < 2000 && (
              <p className="text-center text-orange-500 text-xs mt-3">
                Добавьте товаров на {2000 - total}₽ для бесплатной доставки
              </p>
            )}
          </div>
        )}
      </div>

      {/* Модальное окно оформления заказа */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowCheckoutModal(false)} />
          
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden animate-modal-in">
            <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-purple-50 to-pink-50">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-purple-500" />
                Оформление заказа
              </h2>
              <button 
                onClick={() => setShowCheckoutModal(false)} 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-5" style={{ maxHeight: 'calc(90vh - 180px)' }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Ваше имя <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={orderData.name}
                    onChange={handleInputChange}
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={orderData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Адрес доставки <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={orderData.address}
                    onChange={handleInputChange}
                    placeholder="г. Москва, ул. Примерная, д. 1, кв. 1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Комментарий к заказу
                  </label>
                  <textarea
                    name="comment"
                    value={orderData.comment}
                    onChange={handleInputChange}
                    placeholder="Пожелания по доставке, время визита..."
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Truck className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold text-gray-700">Информация о доставке</span>
                  </div>
                  {total >= 2000 ? (
                    <p className="text-sm text-green-600">✅ Бесплатная доставка (от 2000₽)</p>
                  ) : (
                    <p className="text-sm text-orange-600">
                      До бесплатной доставки не хватает {2000 - total}₽
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-2">Стоимость доставки: {deliveryPrice}₽</p>
                </div>

                <div className="border rounded-xl p-3">
                  <p className="font-semibold text-gray-700 mb-2">Ваш заказ:</p>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.name} x{item.quantity}</span>
                        <span className="font-medium text-gray-800">{item.price * item.quantity}₽</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t p-5 bg-gray-50">
              <div className="flex justify-between mb-4">
                <span className="font-semibold text-gray-700">Итого к оплате:</span>
                <span className="text-2xl font-bold text-purple-600">{finalTotal}₽</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCheckoutModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-all"
                >
                  Назад
                </button>
                <button
                  onClick={handleSubmitOrder}
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {isSubmitting ? 'Оформляем...' : 'Подтвердить заказ'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;