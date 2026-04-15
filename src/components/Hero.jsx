import { ArrowRight, Send, PawPrint, Sparkles, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 opacity-100"></div>
      
      {/* Анимированные лапки на фоне */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Большие лапки */}
        {[...Array(12)].map((_, i) => (
          <PawPrint
            key={`large-${i}`}
            className="absolute text-purple-200/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: 'float 4s ease-in-out infinite',
              animationDelay: `${i * 0.3}s`,
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
        
        {/* Средние лапки */}
        {[...Array(18)].map((_, i) => (
          <PawPrint
            key={`medium-${i}`}
            className="absolute text-pink-200/35"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: 'float 3.5s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`,
              width: `${25 + Math.random() * 35}px`,
              height: `${25 + Math.random() * 35}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
        
        {/* Маленькие лапки */}
        {[...Array(25)].map((_, i) => (
          <PawPrint
            key={`small-${i}`}
            className="absolute text-blue-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: 'float 2.5s ease-in-out infinite',
              animationDelay: `${i * 0.15}s`,
              width: `${15 + Math.random() * 25}px`,
              height: `${15 + Math.random() * 25}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Левая часть */}
          <div className="flex-1 text-center lg:text-left animate-slide-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-purple-600 font-semibold text-sm">С заботой о каждом питомце</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight mb-6">
              Любовь к питомцам
              <span className="gradient-text block">начинается здесь</span>
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Всё для счастья ваших любимцев в одном месте. Быстрая доставка, лучшие цены и забота 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 group">
                Смотреть каталог
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-purple-400 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Наш Telegram
              </button>
            </div>
            
            {/* Дополнительная статистика */}
            <div className="flex gap-8 justify-center lg:justify-start mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5000+</div>
                <div className="text-sm text-gray-500">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-500">100%</div>
                <div className="text-sm text-gray-500">гарантия качества</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-500">поддержка</div>
              </div>
            </div>
          </div>

          {/* Правая часть - картинка cat.png */}
          <div className="flex-1 relative animate-slide-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 min-h-[450px] flex items-center justify-center">
              <img 
                src="/cat.png" 
                alt="Счастливый кот" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Плавающие бейджи */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 animate-float">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <span className="font-bold text-gray-800">4.9</span>
                  <div className="text-xs text-gray-500">рейтинг</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎁</span>
                <div>
                  <span className="font-bold text-gray-800">скидка 10%</span>
                  <div className="text-xs text-gray-500">на первый заказ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;