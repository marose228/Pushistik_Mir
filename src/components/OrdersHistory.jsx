import { useState, useEffect } from 'react';
import { Package, Clock, CheckCircle, XCircle, Truck, Eye, ShoppingBag, Calendar, MapPin, Phone, User, CreditCard } from 'lucide-react';

const OrdersHistory = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Загрузка истории заказов из localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem('ordersHistory');
    if (savedOrders) {
      const ordersList = JSON.parse(savedOrders);
      // Сортируем по дате (новые сверху)
      ordersList.sort((a, b) => b.id - a.id);
      setOrders(ordersList);
    }
  }, []);

  // Функция для получения статуса заказа
  const getOrderStatus = (orderDate) => {
    const orderTime = new Date(orderDate);
    const now = new Date();
    const hoursDiff = (now - orderTime) / (1000 * 60 * 60);
    
    if (hoursDiff < 24) return { status: 'Новый', color: 'bg-blue-500', icon: Clock };
    if (hoursDiff < 48) return { status: 'В обработке', color: 'bg-yellow-500', icon: Package };
    if (hoursDiff < 72) return { status: 'Доставляется', color: 'bg-purple-500', icon: Truck };
    return { status: 'Доставлен', color: 'bg-green-500', icon: CheckCircle };
  };

  if (orders.length === 0) {
    return (
      <section id="orders" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-700 mb-3">История заказов пуста</h2>
            <p className="text-gray-500 mb-8">У вас пока нет оформленных заказов</p>
            <a 
              href="#catalog" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Перейти в каталог
              <ShoppingBag className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="orders" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
            <Package className="w-4 h-4 text-purple-500" />
            <span className="text-purple-600 font-semibold text-sm">Ваши покупки</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            📦 История заказов
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Все ваши заказы в одном месте
          </p>
        </div>

        {/* Список заказов */}
        <div className="space-y-4">
          {orders.map((order, index) => {
            const statusInfo = getOrderStatus(order.date);
            const StatusIcon = statusInfo.icon;
            
            return (
              <div 
                key={order.id} 
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-5">
                  {/* Верхняя часть заказа */}
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-gray-800">Заказ #{order.id.toString().slice(-8)}</span>
                        <span className={`${statusInfo.color} text-white text-xs px-3 py-1 rounded-full flex items-center gap-1`}>
                          <StatusIcon className="w-3 h-3" />
                          {statusInfo.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{order.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600">{order.total}₽</div>
                      <div className="text-sm text-gray-500">сумма заказа</div>
                    </div>
                  </div>

                  {/* Информация о доставке */}
                  <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4 text-purple-500" />
                      <span>{order.customer.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-purple-500" />
                      <span>{order.customer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-purple-500" />
                      <span className="truncate">{order.customer.address}</span>
                    </div>
                  </div>

                  {/* Товары в заказе */}
                  <div className="mt-4 pt-4 border-t">
                    <button
                      onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        {selectedOrder === order.id ? 'Скрыть товары' : `Показать товары (${order.items.length})`}
                      </span>
                    </button>
                    
                    {selectedOrder === order.id && (
                      <div className="mt-3 space-y-2">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center overflow-hidden">
                              {item.image ? (
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-xl">🐾</span>
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                              <p className="text-gray-500 text-xs">Количество: {item.quantity} шт.</p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-purple-600">{item.price * item.quantity}₽</div>
                              <div className="text-xs text-gray-400">{item.price}₽/шт</div>
                            </div>
                          </div>
                        ))}
                        <div className="flex justify-between pt-3 mt-2 border-t">
                          <span className="font-semibold text-gray-700">Доставка:</span>
                          <span className="font-semibold text-gray-700">{order.delivery === 0 ? 'Бесплатно' : `${order.delivery}₽`}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold text-gray-800">Итого:</span>
                          <span className="font-bold text-purple-600 text-lg">{order.total}₽</span>
                        </div>
                        {order.customer.comment && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold">Комментарий:</span> {order.customer.comment}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Кнопка повтора заказа */}
                  <div className="mt-4 pt-4 border-t">
                    <button 
                      onClick={() => {
                        // Добавляем все товары из заказа в корзину
                        order.items.forEach(item => {
                          const cartEvent = new CustomEvent('addToCart', { detail: item });
                          window.dispatchEvent(cartEvent);
                        });
                        alert('Товары добавлены в корзину!');
                      }}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300"
                    >
                      Повторить заказ
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OrdersHistory;