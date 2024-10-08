import ProductSlider from "./ProductCard";

const products = [
  {
    name: 'Bulbul 75 L Desert Air Cooler (Grey)',
    price: '₹7,390/-',
    actual_price: '₹8,000/-',
    image: '/assets/card1.jpg',
    discount: 50,
    isOutOfStock: false,
  },
  {
    name: 'Ronaldo 95 L Desert Air Cooler (White)',
    price: '₹12,790/-',
    actual_price: '₹14,000/-',
    image: '/assets/card2.jpg',
    discount: 46,
    isOutOfStock: true,
  },
  {
    name: 'Ronaldo 95 L Desert Air Cooler (Grey)',
    price: '₹11,630/-',
    actual_price: '₹18000/-',
    image: '/assets/card3.jpg',
    discount: 59,
    isOutOfStock: true,
  },
  {
    name: 'Chiller 100 L Desert Air Cooler (White)',
    price: '₹12,380/-',
    actual_price: '₹15,000',
    image: '/assets/card4.jpg',
    discount: 41,
    isOutOfStock: false,
  },
  {
    name: 'Bulbul 10 L Desert Air Cooler (White)',
    price: '₹19,380/-',
    actual_price: '₹27,390/-',
    image: '/assets/card5.jpg',
    discount: 59,
    isOutOfStock: true,
  },
  {
    name: 'Orient 95 L Desert Air Cooler (Black)',
    price: '₹12,380/-',
    actual_price: '₹17,390/-',
    image: '/assets/card6.jpg',
    discount: 40,
    isOutOfStock: false,
  },
  {
    name: 'Chiller 400 L Desert Air Cooler (Black)',
    price: '₹12,380/-',
    actual_price: '₹14,390/-',
    image: '/assets/card7.jpeg',
    discount: 30,
    isOutOfStock: true,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <ProductSlider products={products} />
    </div>
  );
}
