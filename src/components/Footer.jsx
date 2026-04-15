import { PawPrint, Phone, Mail, MapPin, Clock, Heart, Send, Camera, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ПушистикМир
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Всё для счастливой жизни ваших питомцев с 2019 года.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Быстрые ссылки
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-purple-400 transition-colors">Главная</a></li>
              <li><a href="#hots" className="text-gray-400 hover:text-purple-400 transition-colors">Каталог</a></li>
              <li><a href="#promo" className="text-gray-400 hover:text-purple-400 transition-colors">Акции</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-purple-400 transition-colors">Отзывы</a></li>
              <li><a href="#footer" className="text-gray-400 hover:text-purple-400 transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">info@pushistikmir.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">г. Москва, ул. Зоологическая, 15</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400">Ежедневно 10:00 - 21:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Подпишитесь
            </h4>
            <p className="text-gray-400 mb-4">Будьте в курсе акций и новостей</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-r-lg hover:shadow-lg transition-all">
                →
              </button>
            </div>
            <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
              <Heart className="w-4 h-4 text-pink-400" />
              <span>Мы любим наших клиентов</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 ПушистикМир. Все права защищены. Сделано с ❤️ для ваших питомцев</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;