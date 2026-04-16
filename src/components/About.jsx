import { Users, Package, Award, Clock, Heart, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: '6+', label: 'Лет на рынке', color: 'from-blue-400 to-blue-500' },
    { icon: Users, value: '10 000+', label: 'Довольных клиентов', color: 'from-purple-400 to-purple-500' },
    { icon: Package, value: '500+', label: 'Товаров', color: 'from-pink-400 to-pink-500' },
    { icon: Award, value: '100%', label: 'Сертификаты', color: 'from-indigo-400 to-purple-500' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Левая часть - фото cat2.png с вращением при наведении */}
            <div className="lg:w-1/2 relative group perspective-1000">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 min-h-[450px] transition-all duration-500 group-hover:rotate-y-12">
                <img src="cat2.png" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-white text-center">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-sm">лет заботы</div>
                </div>
            </div>
            </div>

          {/* Правая часть - текст */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm animate-fade-up">
              <Sparkles className="w-4 h-4 text-purple-500 animate-spin-slow" />
              <span className="text-purple-600 font-semibold">О компании</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-up delay-100">
              ПушистикМир — <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ваш надежный помощник</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed animate-fade-up delay-200">
              Мы — команда профессионалов, которые искренне любят животных. Наш магазин создан для тех, 
              кто хочет дать своим питомцам только лучшее.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed animate-fade-up delay-300">
              Мы сотрудничаем только с проверенными производителями и гарантируем качество каждого товара. 
              Наши консультанты всегда готовы помочь с выбором.
            </p>

            {/* Статистика */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center p-4 bg-white rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer animate-fade-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;