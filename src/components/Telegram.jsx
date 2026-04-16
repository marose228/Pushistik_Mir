import { Send, Gift, Sparkles, Heart, Zap } from 'lucide-react';

const Telegram = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
          <div className="flex flex-col md:flex-row">
            {/* Левая часть - контент */}
            <div className="flex-1 p-8 md:p-12 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-purple-500" />
                <span className="text-purple-600 font-semibold text-sm">Специальное предложение</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Подпишись на Telegram-бота
              </h2>
              
              <p className="text-gray-600 text-lg mb-4">
                и получи{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-3xl">
                  скидку 10%
                </span>{' '}
                на первый заказ
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 justify-center md:justify-start group">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700">Еженедельные акции и распродажи</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start group">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700">Советы по уходу за питомцами</span>
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start group">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-gray-700">Быстрая связь с ветеринаром</span>
                </li>
              </ul>
              
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Перейти в бота
              </button>
              
              <div className="flex items-center gap-1 justify-center md:justify-start mt-4 text-gray-400 text-sm">
                <Heart className="w-3 h-3 text-pink-400" />
                <span>3000+ уже с нами</span>
              </div>
            </div>

            {/* Правая часть - QR код из qr.png */}
            <div className="flex-1 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="text-center relative z-10">
                <div className="bg-white p-4 rounded-2xl inline-block mb-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img src="qr.png" />
                </div>
                <p className="text-white font-semibold text-lg">@pushistik_bot</p>
                <p className="text-white/80 text-sm mt-1">Нажми для перехода</p>
                <div className="flex items-center gap-1 justify-center mt-3 text-white/60 text-xs">
                  <Sparkles className="w-3 h-3" />
                  <span>Наведите камеру для перехода</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Telegram;