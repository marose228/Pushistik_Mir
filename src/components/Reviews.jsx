import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Sparkles, Quote } from 'lucide-react';
import { reviews } from '../data/products';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Фоновые лапки */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-300 to-pink-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              animation: 'float 5s ease-in-out infinite',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-purple-600 font-semibold text-sm">Отзывы клиентов</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            💬 Что говорят о нас
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Доверие наших клиентов — наша главная награда
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Карточка отзыва */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Quote className="w-10 h-10 text-purple-300 mb-4 opacity-50" />
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 italic">
              "{reviews[currentIndex].text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={reviews[currentIndex].avatar}
                alt={reviews[currentIndex].name}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-4 ring-purple-100"
              />
              <div>
                <h4 className="font-bold text-lg md:text-xl text-gray-800">{reviews[currentIndex].name}</h4>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < reviews[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{reviews[currentIndex].date}</span>
              </div>
            </div>
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-12 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white group"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-purple-600 group-hover:text-white" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-12 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white group"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-purple-600 group-hover:text-white" />
          </button>

          {/* Точки пагинации */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8' 
                    : 'bg-gray-300 w-2 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
};

export default Reviews;