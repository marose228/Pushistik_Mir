import { Truck, Shield, Stethoscope, Gift, Sparkles } from 'lucide-react';

const advantages = [
  { icon: Truck, title: 'Быстрая доставка', desc: 'Бесплатно от 2000₽', color: 'from-blue-400 to-blue-500', delay: 0 },
  { icon: Shield, title: 'Сертифицированные товары', desc: '100% оригинал', color: 'from-purple-400 to-purple-500', delay: 100 },
  { icon: Stethoscope, title: 'Консультация ветеринара', desc: '24/7 онлайн', color: 'from-pink-400 to-pink-500', delay: 200 },
  { icon: Gift, title: 'Программа лояльности', desc: 'Копите бонусы', color: 'from-indigo-400 to-purple-500', delay: 300 },
];

const Advantages = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm animate-fade-up">
            <Sparkles className="w-4 h-4 text-purple-500 animate-spin-slow" />
            <span className="text-purple-600 font-semibold text-sm">Почему выбирают нас</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-up delay-100">
            Забота, которой доверяют
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            Мы делаем всё, чтобы ваши питомцы были счастливы и здоровы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${adv.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-float`}>
                <adv.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-purple-600 transition-colors">
                {adv.title}
              </h3>
              <p className="text-gray-600 text-center">{adv.desc}</p>
            </div>
          ))}
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
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

export default Advantages;