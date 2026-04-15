import { Sparkles, ArrowRight } from 'lucide-react';

const categories = [
  { id: 1, name: 'Корма', icon: '🍖', items: '150+ товаров', gradient: 'from-orange-400 to-pink-500', description: 'Сухие и влажные корма' },
  { id: 2, name: 'Игрушки', icon: '🎾', items: '80+ товаров', gradient: 'from-green-400 to-blue-500', description: 'Для активных игр' },
  { id: 3, name: 'Ветпрепараты', icon: '💊', items: '120+ товаров', gradient: 'from-purple-400 to-indigo-500', description: 'Лечение и профилактика' },
  { id: 4, name: 'Аксессуары', icon: '🦴', items: '100+ товаров', gradient: 'from-rose-400 to-orange-500', description: 'Лежанки, миски, ошейники' },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-purple-600 font-semibold text-sm">Что мы предлагаем</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Популярные категории
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Выберите то, что нужно вашему питомцу
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a 
              key={cat.id} 
              href="#catalog"
              className="group relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl">{cat.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cat.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{cat.description}</p>
                <p className="text-gray-400 text-xs mb-3">{cat.items}</p>
                <div className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full text-sm font-semibold group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                  <span>Перейти</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;