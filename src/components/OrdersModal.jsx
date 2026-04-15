import { useState, useEffect } from 'react';
import { X, Package, Clock, CheckCircle, Truck, Eye, Calendar, MapPin, Phone, User } from 'lucide-react';

const OrdersModal = ({ isOpen, onClose, onAddToCart }) => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const savedOrders = localStorage.getItem('ordersHistory');
      if (savedOrders) {
        const ordersList = JSON.parse(savedOrders);
        ordersList.sort((a, b) => b.id - a.id);
        setOrders(ordersList);
      } else {
        setOrders([]);
      }
    }
  }, [isOpen]);

  const getOrderStatus = (orderDate) => {
    const orderTime = new Date(orderDate);
    const now = new Date();
    const hoursDiff = (now - orderTime) / (1000 * 60 * 60);
    
    if (hoursDiff < 24) return { status: 'Новый', color: 'bg-blue-500', icon: Clock };
    if (hoursDiff < 48) return { status: 'В обработке', color: 'bg-yellow-500', icon: Package };
    if (hoursDiff < 72) return { status: 'Доставляется', color: 'bg-purple-500', icon: Truck };
    return { status: 'Доставлен', color: 'bg-green-500', icon: CheckCircle };
  };

  const repeatOrder = (order) => {
    order.items.forEach(item => {
      onAddToCart(item);
    });
    alert('✅ Товары добавлены в корзину!');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-fade-in" onClick={onClose} />
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl z-[102] overflow-hidden animate-modal-in">
        <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="flex items-center gap-2">
            <Package className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-bold text-gray-800">📦 История заказов</h2>
            {orders.length > 0 && (
              <span className="ml-2 bg-purple-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {orders.length}
              </span>
            )}
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors hover:scale-110">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5" style={{ maxHeight: 'calc(85vh - 80px)' }}>
          {orders.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">История заказов пуста</h3>
              <p className="text-gray-500 mb-6">У вас пока нет оформленных заказов</p>
              <button onClick={onClose} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all">
                Продолжить покупки
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => {
                const statusInfo = getOrderStatus(order.date);
                const StatusIcon = statusInfo.icon;
                
                return (
                  <div key={order.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all">
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
                            <div key={item.id} className="flex items-center gap-3 p-3 bg-white rounded-xl">
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

                    <div className="mt-4 pt-4 border-t">
                      <button 
                        onClick={() => repeatOrder(order)} 
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300"
                      >
                        Повторить заказ
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
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
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default OrdersModal;