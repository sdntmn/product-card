export type Currency = 'RUB' | 'USD' | 'EUR';
export interface Data {
  id: string;
  title: string;
  origin: string;
  price: number;
  currency: Currency;
  imageUrl: string;
}

export const data: Data[] =[
  {
    "id": "1",
    "title": "Кофе в зернах Бразилия Сантос",
    "origin": "Бразилия",
    "price": 34900,
    "currency": "RUB",
    "imageUrl": "https://a-kofe.ru/upload/medialibrary/050/Brazil-8.jpg"
  },
  {
    "id": "2",
    "title": "Бразильский кофе Арабика",
    "origin": "Бразилия",
    "price": 42000,
    "currency": "RUB",
    "imageUrl": ""
  },
  {
    "id": "3",
    "title": "Зеленый кофе Бразилия",
    "origin": "Бразилия",
    "price": 28000,
    "currency": "RUB",
    "imageUrl": "https://teashop.spb.ru/image/data/tk/coffeearabica/green-coffee-brazil/green-coffee-brazil1.jpg"
  },
  {
    "id": "4",
    "title": "Бразильские какао-бобы",
    "origin": "Бразилия",
    "price": 51000,
    "currency": "RUB",
    "imageUrl": "https://img.freepik.com/premium-photo/small-flag-map-brazil-cacao-beans-growing-cocoa-brazil-concept_123211-5860.jpg"
  },
  {
    "id": "5",
    "title": "Бразильский орех (1 кг)",
    "origin": "Бразилия",
    "price": 15000,
    "currency": "RUB",
    "imageUrl": "https://img.sunfruits.ru/images/products/1/258/286548226/%D0%B1%D1%80%D0%B0%D0%B7%D0%B8%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_%D0%BE%D1%80%D0%B5%D1%85_%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82.jpg"
  }
]
