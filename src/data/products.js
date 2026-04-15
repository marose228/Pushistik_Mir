export const products = [
  // Корма
  {
    id: 1,
    name: 'Ownat Classic',
    category: 'Корма',
    price: 980,
    oldPrice: 1200,
    description: 'Сухой корм для взрослых котов, 2 кг',
    image: 'https://cdn1.ozone.ru/s3/multimedia-8/c600/6539393840.jpg',
    badge: 'Хит',
    rating: 5
  },
  {
    id: 2,
    name: 'PEDIGREE',
    category: 'Корма',
    price: 550,
    oldPrice: null,
    description: 'Сухой корм для всех собак, 1.5 кг',
    image: 'https://cdn1.ozone.ru/s3/multimedia-p/c600/6569196349.jpg',
    badge: null,
    rating: 4
  },
  {
    id: 3,
    name: 'Пёрышко',
    category: 'Корма',
    price: 180,
    oldPrice: 250,
    description: 'Зерновая смесь для попугаев, 500 г',
    image: 'https://zhivoimir.kz/upload/iblock/ad1/9i9zv85ocbk780o151i2rjuiu3yri2b9/311774f2-987e-4650-803c-b3c50b14f333_2107a315-37ff-11ed-be97-3cecef9104ba.resize1.png',
    badge: '-28%',
    rating: 5
  },
  {
    id: 4,
    name: 'TetraBetta',
    category: 'Корма',
    price: 130,
    oldPrice: null,
    description: 'Хлопья для аквариумных рыб, 100 мл',
    image: 'https://cdn1.ozone.ru/s3/multimedia-y/6597416770.jpg',
    badge: 'Новинка',
    rating: 4
  },
  {
    id: 5,
    name: 'Little One',
    category: 'Корма',
    price: 600,
    oldPrice: null,
    description: 'Корм для морских свинок, 1 кг',
    image: 'https://avatars.mds.yandex.net/get-mpic/5163855/2a0000018fdd15879ba1266c040479acc418/orig',
    badge: null,
    rating: 5
  },
  {
    id: 6,
    name: 'Whiskas',
    category: 'Корма',
    price: 100,
    oldPrice: 150,
    description: 'Корм для маленьких котят, 400 г',
    image: 'https://avatars.mds.yandex.net/get-mpic/4034173/img_id6826535314466451376.jpeg/orig',
    badge: '-33%',
    rating: 4
  },
  {
    id: 7,
    name: 'Royal Canin',
    category: 'Корма',
    price: 1250,
    oldPrice: 1500,
    description: 'Премиум корм для кошек, 2 кг',
    image: 'https://avatars.mds.yandex.net/get-mpic/2002045/img_id5387351346773631505.jpeg/orig',
    badge: 'Хит',
    rating: 5
  },
  {
    id: 8,
    name: 'Pro Plan',
    category: 'Корма',
    price: 890,
    oldPrice: null,
    description: 'Корм для активных собак, 1.5 кг',
    image: 'https://catalog-cdn.detmir.st/media/ffaeLE6ibOV4oSyLk5_pkiBsAyK18rDmNIBrlDOcAho=.jpeg',
    badge: null,
    rating: 5
  },
  {
    id: 9,
    name: 'Versele Laga',
    category: 'Корма',
    price: 320,
    oldPrice: 400,
    description: 'Корм для хомяков, 800 г',
    image: 'https://zhivoimir.kz/upload/iblock/ad1/9i9zv85ocbk780o151i2rjuiu3yri2b9/311774f2-987e-4650-803c-b3c50b14f333_2107a315-37ff-11ed-be97-3cecef9104ba.resize1.png',
    badge: '-20%',
    rating: 4
  },

  // Игрушки
  {
    id: 10,
    name: 'Игрушка "Мышка"',
    category: 'Игрушки',
    price: 150,
    oldPrice: null,
    description: 'Мягкая игрушка с кошачьей мятой',
    image: 'https://avatars.mds.yandex.net/get-mpic/8139064/img_id8119840398128444286.jpeg/orig',
    badge: null,
    rating: 5
  },
  {
    id: 11,
    name: 'Мяч для собак',
    category: 'Игрушки',
    price: 190,
    oldPrice: 250,
    description: 'Прочный резиновый мяч, 6 см',
    image: 'https://avatars.mds.yandex.net/get-mpic/4448884/img_id1641882767568261050.png/optimize',
    badge: null,
    rating: 4
  },
  {
    id: 12,
    name: 'Интерактивная игрушка',
    category: 'Игрушки',
    price: 450,
    oldPrice: 600,
    description: 'Лабиринт для кошек с мячиком',
    image: 'https://ir.ozone.ru/s3/multimedia-1-2/7657357142.jpg',
    badge: 'Хит',
    rating: 5
  },
  {
    id: 13,
    name: 'Канат для перетягивания',
    category: 'Игрушки',
    price: 280,
    oldPrice: null,
    description: 'Прочный канат для собак, 40 см',
    image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/163294287/100024937255b0.jpg',
    badge: null,
    rating: 4
  },
  {
    id: 14,
    name: 'Пищалка для собак',
    category: 'Игрушки',
    price: 120,
    oldPrice: 180,
    description: 'Резиновая игрушка-пищалка',
    image: 'https://ir.ozone.ru/multimedia/1018536675.jpg',
    badge: '-33%',
    rating: 4
  },

  // Ветпрепараты
  {
    id: 15,
    name: 'Витамины для кошек',
    category: 'Ветпрепараты',
    price: 350,
    oldPrice: null,
    description: 'Поддержка иммунитета, 60 табл.',
    image: 'https://zoofarm.by/wp-content/uploads/2020/03/yunitabs-immunoket-unitabs-immunocat-dlya-koshek-ot-1-goda-do-8-let-120-tabletok-60g.jpg',
    badge: 'Хит',
    rating: 5
  },
  {
    id: 16,
    name: 'Капли от блох',
    category: 'Ветпрепараты',
    price: 500,
    oldPrice: 650,
    description: 'Защита до 2 месяцев, 3 пипетки',
    image: 'http://zoomagic.ru/images/stories/virtuemart/product/beaphar-beafar-kapli-dlya-sobak-ot-blokh-i-kleshchej-1-pipetka.jpg',
    badge: '-23%',
    rating: 4
  },
  {
    id: 17,
    name: 'Гель от глистов',
    category: 'Ветпрепараты',
    price: 280,
    oldPrice: 350,
    description: 'Для кошек и собак, 5 мл',
    image: 'https://akva-zoomarket.ru/upload/iblock/8b1/e6l302vqrb2ph5h5yah7dop5n5szy00n.jpg',
    badge: 'Новинка',
    rating: 5
  },
  {
    id: 18,
    name: 'Шампунь для собак',
    category: 'Ветпрепараты',
    price: 320,
    oldPrice: null,
    description: 'Гипоаллергенный, 250 мл',
    image: 'https://myzoodom.ru/image/cache/catalog/image/cache/catalog/incoming/system/image_view.phppath__images_copco_catalog_65051_jpg_amp_width_400_amp_height_500-1000x1000.webp',
    badge: null,
    rating: 4
  },
  {
    id: 19,
    name: 'Спрей от клещей',
    category: 'Ветпрепараты',
    price: 420,
    oldPrice: 550,
    description: 'Защита до 3 недель, 100 мл',
    image: 'https://myzoodom.ru/image/cache/catalog/image/cache/catalog/incoming/images/products/1/2283/220317931/34722-1000x1000.webp',
    badge: '-24%',
    rating: 5
  },

  // Аксессуары
  {
    id: 20,
    name: 'Лежанка для кошек',
    category: 'Аксессуары',
    price: 890,
    oldPrice: 1200,
    description: 'Мягкая лежанка, 50x40 см',
    image: 'https://ir.ozone.ru/s3/multimedia-l/6067327941.jpg',
    badge: 'Хит',
    rating: 5
  },
  {
    id: 21,
    name: 'Ошейник светоотражающий',
    category: 'Аксессуары',
    price: 250,
    oldPrice: null,
    description: 'Регулируемый, для собак, M',
    image: 'https://avatars.mds.yandex.net/get-mpic/15300889/2a00000196cd4d2870e7d8acbf31d203cf5e/orig',
    badge: null,
    rating: 4
  },
  {
    id: 22,
    name: 'Миска на подставке',
    category: 'Аксессуары',
    price: 650,
    oldPrice: 850,
    description: 'Нержавеющая сталь, 2 чаши',
    image: 'https://main-cdn.sbermegamarket.ru/hlr-system/-49/819/677/981/816/45/600004287318b0.jpg',
    badge: '-24%',
    rating: 5
  },
  {
    id: 23,
    name: 'Когтеточка',
    category: 'Аксессуары',
    price: 1200,
    oldPrice: 1600,
    description: 'Настенная, 60 см',
    image: 'https://ir.ozone.ru/s3/multimedia-p/6306070045.jpg',
    badge: 'Хит',
    rating: 5
  },
  {
    id: 24,
    name: 'Переноска для животных',
    category: 'Аксессуары',
    price: 1500,
    oldPrice: 2000,
    description: 'Тканевая, для кошек и собак до 5 кг',
    image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/1695407/100022760278b0.jpg',
    badge: '-25%',
    rating: 4
  },
  {
    id: 25,
    name: 'Расческа-пуходерка',
    category: 'Аксессуары',
    price: 180,
    oldPrice: null,
    description: 'Для длинношерстных кошек',
    image: 'https://api.zapovednik96.ru/upload/iblock/d72/d72ece4a58875afe65aeb37b9aaab467.jpeg',
    badge: 'Новинка',
    rating: 5
  }
];

export const categories = [
  { id: 1, name: 'Все товары', icon: '📦', count: products.length },
  { id: 2, name: 'Корма', icon: '🍖', count: products.filter(p => p.category === 'Корма').length },
  { id: 3, name: 'Игрушки', icon: '🎾', count: products.filter(p => p.category === 'Игрушки').length },
  { id: 4, name: 'Ветпрепараты', icon: '💊', count: products.filter(p => p.category === 'Ветпрепараты').length },
  { id: 5, name: 'Аксессуары', icon: '🦴', count: products.filter(p => p.category === 'Аксессуары').length }
];

export const reviews = [
  {
    id: 1,
    name: 'Анастасия',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Очень понравился магазин! Быстрая доставка и огромное спасибо за консультацию по выбору корма.',
    date: 'Апрель 2025'
  },
  {
    id: 2,
    name: 'Максим',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4,
    text: 'Хорошие цены и много товаров для попугаев. Иногда не хватает скидок, но качество всегда на уровне!',
    date: 'Март 2025'
  },
  {
    id: 3,
    name: 'Ольга',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'Заказываем здесь ветпрепараты — всегда свежие, курьер вежливый, оплата удобная. Спасибо!',
    date: 'Февраль 2025'
  }
];

export const promoProducts = [
  {
    id: 101,
    name: 'Корм "Лакомка"',
    price: 355,
    oldPrice: 420,
    description: '1 кг, сухой корм, вкус курица',
    image: 'https://avatars.mds.yandex.net/get-mpic/11930023/2a0000018ca612e77ad1f3b9cef850c5b6b5/orig',
    discount: 15
  },
  {
    id: 102,
    name: 'Игрушка-кость',
    price: 150,
    oldPrice: 190,
    description: 'Для маленьких и средних собак',
    image: 'https://avatars.mds.yandex.net/get-mpic/7144437/img_id4953119310264785442.png/orig',
    discount: 21
  }
];