
export const coffeeImages = {
  cortado1: 'https://lh3.googleusercontent.com/p/AF1QipNG9Vy7FdFKmMLsbidttqzdCQgbfpffqhG275W4=s435-k-no',
  cortado2: 'https://lh3.googleusercontent.com/p/AF1QipMXuhak23RR1pE8sUdxw8BhU0BRewQ13vB6Jr_g=w203-h270-k-no',
  barista1: 'https://lh3.googleusercontent.com/p/AF1QipOUqAaoSSDFSvoPmj703n26WYLFzNROjfMvghny=s406-k-no',
  barista2: 'https://lh3.googleusercontent.com/p/AF1QipOCoafOzS6M6ADWHYYOQ5oF_mZxQuETPV_i-qp2=s406-k-no',
  brewing1: 'https://lh3.googleusercontent.com/p/AF1QipOUqAaoSSDFSvoPmj703n26WYLFzNROjfMvghny=s325-k-no',
  brewing2: 'https://lh3.googleusercontent.com/p/AF1QipP4j2qF0mLk__3sQigllemjG8P8yh-BrQeCJ_pU=s325-k-no',
  brewing3: 'https://lh3.googleusercontent.com/p/AF1QipPfoi5cM7j6RJUCAZL8QlPZ5SlzI_X7-BpSYpIj=s275-k-no',
  premium: 'https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg'
};

export const menuItems = {
  hotDrinks: [
    { id: 1, name: 'Espresso', description: 'Rich and bold single espresso shot.' },
    { id: 2, name: 'Double Espresso', description: 'Double shot of our signature espresso.' },
    { id: 3, name: 'Espresso Macchiato', description: 'Espresso topped with a touch of milk foam.' },
    { id: 4, name: 'Americano', description: 'Espresso diluted with hot water for a smooth taste.' },
    { id: 5, name: 'American Coffee', description: 'Classic brewed coffee made from specialty beans.' },
    { id: 6, name: 'V60', description: 'Hand-brewed V60 coffee (Ethiopian, Costa Rica, Rwanda).' },
    { id: 7, name: 'Turkish Coffee', description: 'Traditional finely ground coffee, slow brewed.' },
    { id: 8, name: 'Latte', description: 'Smooth espresso with steamed milk.' },
    { id: 9, name: 'Flat White', description: 'Velvety microfoam over a strong espresso base.' },
    { id: 10, name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam.' },
    { id: 11, name: 'Cortado', description: 'Perfect balance of espresso and warm milk.', popular: true },
    { id: 12, name: 'ELEK', description: 'Our unique house-crafted coffee experience.' },
    { id: 13, name: 'Flavored Latte', description: 'Latte infused with flavored syrup of choice.' },
    { id: 14, name: 'Caramel Macchiato', description: 'Espresso layered with vanilla milk and caramel.' },
    { id: 15, name: 'Spanish Latte', description: 'Creamy latte sweetened with condensed milk.' },
    { id: 16, name: 'White Mocha Latte', description: 'Espresso blended with white chocolate and milk.' },
    { id: 17, name: 'Mocha Latte', description: 'Espresso mixed with rich chocolate and milk.' },
    { id: 18, name: 'Hot Chocolate', description: 'Smooth and comforting chocolate drink.' },
    { id: 19, name: 'Matcha', description: 'Traditional matcha green tea drink.' },
    { id: 20, name: 'Flavored Matcha', description: 'Matcha infused with flavored syrup.' },
    { id: 21, name: 'Tea Selection', description: 'A curated selection of premium teas.' },
  ],

  icedDrinks: [
    { id: 22, name: 'Iced Americano', description: 'Chilled espresso with cold water.' },
    { id: 23, name: 'Cold Brew', description: 'Slow-brewed cold coffee (Ethiopian, Costa Rica, Rwanda).' },
    { id: 24, name: 'Iced Latte', description: 'Cold milk over espresso and ice.' },
    { id: 25, name: 'Iced Flavored Latte', description: 'Iced latte with flavored syrup.' },
    { id: 26, name: 'Iced Spanish Latte', description: 'Cold latte with condensed milk.' },
    { id: 27, name: 'Iced White Mocha Latte', description: 'White chocolate espresso served iced.' },
    { id: 28, name: 'Iced Mocha Latte', description: 'Chocolate espresso drink served cold.' },
    { id: 29, name: 'Iced Matcha Latte', description: 'Cold matcha blended with milk.' },
    { id: 30, name: 'Iced Flavored Matcha', description: 'Flavored iced matcha drink.' },
    { id: 31, name: 'Affogato', description: 'Espresso poured over vanilla ice cream.' },
    { id: 32, name: 'Frappe', description: 'Classic blended iced coffee drink.' },
    { id: 33, name: 'BLCK Frappe', description: 'Our signature BLCK blended frappe.' },
    { id: 34, name: 'Frappuccino', description: 'Creamy blended coffee beverage.' },
    { id: 35, name: 'Caramel Frappe', description: 'Blended coffee with caramel flavor.' },
    { id: 36, name: 'Salted Caramel Frappe', description: 'Sweet and salty caramel blend.' },
    { id: 37, name: 'Chocolate Frappe', description: 'Rich chocolate blended drink.' },
  ],

  icedTea: [
    { id: 38, name: 'BLCK Iced Tea', description: 'House-made refreshing iced tea.' },
    { id: 39, name: 'Iced Tea Peach', description: 'Peach-flavored iced tea.' },
    { id: 40, name: 'Iced Tea Lemon', description: 'Classic lemon iced tea.' },
    { id: 41, name: 'Iced Tea Raspberry', description: 'Raspberry-infused iced tea.' },
  ],

  refreshing: [
    { id: 42, name: 'Mojito', description: 'Refreshing mint and citrus drink.' },
    { id: 43, name: 'Passion Mojito', description: 'Mojito infused with passion fruit.' },
  ],

  smoothies: [
    { id: 44, name: 'Tropical Smoothie', description: 'Blend of tropical fruits.' },
    { id: 45, name: 'Mango Smoothie', description: 'Fresh mango blended smoothie.' },
    { id: 46, name: 'Mango Basil Smoothie', description: 'Mango smoothie with fresh basil.' },
    { id: 47, name: 'Peach Passion Smoothie', description: 'Peach and passion fruit blend.' },
  ],

  gingerShots: [
    { id: 48, name: 'Ginger Orange Shot', description: 'Fresh ginger shot with orange.' },
    { id: 49, name: 'Ginger Lemon Shot', description: 'Ginger shot with fresh lemon.' },
  ],

  bagels: [
    { id: 50, name: 'Three Cheese Bagel', description: 'Cheddar, mozzarella, and emmental cheese.' },
    { id: 51, name: 'Halloumi Pesto Bagel', description: 'Halloumi, homemade pesto, tomato & greens.' },
    { id: 52, name: 'Turkey and Cheese Bagel', description: 'Roasted turkey, cheese, tomato & greens.' },
    { id: 53, name: 'Peanut Butter & Strawberry Jam', description: 'Peanut butter with strawberry jam.' },
    { id: 54, name: 'Smoked Salmon Bagel', description: 'Smoked salmon, cream cheese & capers.' },
    { id: 55, name: 'Mango Chutney & Feta Bagel', description: 'Mango chutney, feta, mint & chili flakes.' },
    { id: 56, name: 'Labne Bagel', description: 'Labne, mint, cucumber & olive oil.' },
    { id: 57, name: 'Tuna Bagel', description: 'White tuna, mayo, mustard & pickles.' },
  ],

  salads: [
    { id: 58, name: 'Smoked Chicken Caesar', description: 'Smoked chicken, parmesan & croutons.' },
    { id: 59, name: 'Halloumi Salad', description: 'Mixed greens, halloumi & fresh strawberries.' },
  ],

  desserts: [
    { id: 60, name: 'Double Chocolate Cookie', description: 'Rich double chocolate cookie.' },
    { id: 61, name: 'Vanilla Chocolate Cookie', description: 'Vanilla cookie with chocolate.' },
    { id: 62, name: 'Tiramisu Jar', description: 'Classic tiramisu layered dessert.' },
    { id: 63, name: 'Honey Cake', description: 'Moist honey-flavored cake.' },
    { id: 64, name: 'Chia Pudding', description: 'Healthy chia seed pudding.' },
    { id: 65, name: 'Granola', description: 'Crunchy house-made granola.' },
    { id: 66, name: 'Strawberry Jam Cheesecake', description: 'Cheesecake with strawberry jam.' },
    { id: 67, name: 'Mango Passion Fruit Jar', description: 'Sponge cake with mango & passion fruit.' },
    { id: 68, name: 'Red Velvet Jar', description: 'Red velvet cake with mascarpone cream.' },
    { id: 69, name: 'Banana Cake', description: 'Classic banana cake.' },
    { id: 70, name: 'Orange Cake', description: 'Fresh orange-flavored cake.' },
    { id: 71, name: 'Marble Cake', description: 'Vanilla and chocolate marble cake.' },
    { id: 72, name: 'Brownie', description: 'Rich chocolate brownie.' },
  ],

  croissants: [
    { id: 73, name: 'Butter Croissant', description: 'Classic French butter croissant.' },
    { id: 74, name: 'Cheese Croissant', description: 'Croissant filled with cheese.' },
    { id: 75, name: 'Zaatar Croissant', description: 'Croissant with zaatar filling.' },
    { id: 76, name: 'Chocolate Croissant', description: 'Croissant filled with chocolate.' },
    { id: 77, name: 'Almond Croissant', description: 'Croissant topped with almond cream.' },
  ],
};

export const reviews = [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    text: 'Proper cortado with quality beans. The best coffee experience in Beirut!',
    date: '2 weeks ago'
  },
  {
    id: 2,
    author: 'James K.',
    rating: 5,
    text: 'Cozy atmosphere and excellent coffee. The baristas really know their craft.',
    date: '1 month ago'
  },
  {
    id: 3,
    author: 'Noor A.',
    rating: 5,
    text: 'Best coffee in Beirut, hands down. Love the relaxed vibe and friendly service.',
    date: '3 weeks ago'
  },
  {
    id: 4,
    author: 'Michael R.',
    rating: 5,
    text: 'Their takeaway coffee quality is exceptional. Even delivery maintains the same high standard.',
    date: '1 week ago'
  },
  {
    id: 5,
    author: 'Lina T.',
    rating: 5,
    text: 'The banana bread is amazing! Perfect pairing with their specialty coffee.',
    date: '2 months ago'
  },
  {
    id: 6,
    author: 'David L.',
    rating: 5,
    text: 'A gem in Lebanon. Quality beans, skilled baristas, and a welcoming environment.',
    date: '1 month ago'
  }
];

export const locationInfo = {
  name: 'Cedar Brew Coffee',
  address: 'Hamra, Beirut, Lebanon',
  phone: '+961 81 090 757',
  hours: {
    weekday: 'Monday - Sunday',
    time: 'Open Daily until 10:00 PM'
  },
  rating: 4.9,
  totalReviews: 37,
  coordinates: {
    lat: 33.8886,
    lng: 35.4955
  }
};

export const aboutContent = {
  title: 'Crafted with Passion',
  description: 'Cedar Brew Coffee is a neighborhood coffee shop offering specialty coffee, handcrafted drinks, and fresh pastries in a calm and welcoming space. We focus on quality beans, skilled brewing, and a comfortable atmosphere for work, meetings, or relaxation.',
  highlights: [
    'Premium specialty beans from around the world',
    'Expert baristas trained in the art of coffee',
    'Cozy, welcoming atmosphere for all',
    'Famous for the best cortado in Lebanon'
  ]
};