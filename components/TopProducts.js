import ProductSlider from "./ProductCard";

const products = [
  {
    name: 'Bulbul 75 L Desert Air Cooler (Grey)',
    price: '₹7,390/-',
    actual_price: '₹8,000/-',
    image: '/assets/card1.jpg',
    isOutOfStock: false,
  },
  {
    name: 'Ronaldo 95 L Desert Air Cooler (White)',
    price: '₹12,790/-',
    actual_price: '₹14,000/-',
    image: '/assets/card2.jpg',
    isOutOfStock: true,
  },
  {
    name: 'Ronaldo 95 L Desert Air Cooler (Grey)',
    price: '₹11,630/-',
    actual_price: '₹18000/-',
    image: '/assets/card3.jpg',
    isOutOfStock: true,
  },
  {
    name: 'Chiller 100 L Desert Air Cooler (White)',
    price: '₹12,380/-',
    actual_price: '₹15,000',
    image: '/assets/card4.jpg',
    isOutOfStock: false,
  },
  {
    name: 'Bulbul 10 L Desert Air Cooler (White)',
    price: '₹19,380/-',
    actual_price: '₹27,390/-',
    image: '/assets/card5.jpg',
    isOutOfStock: true,
  },
  {
    name: 'Orient 95 L Desert Air Cooler (Black)',
    price: '₹12,380/-',
    actual_price: '₹17,390/-',
    image: '/assets/card6.jpg',
    isOutOfStock: false,
  },
  {
    name: 'Chiller 400 L Desert Air Cooler (Black)',
    price: '₹12,380/-',
    actual_price: '₹14,390/-',
    image: '/assets/card7.jpeg',
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
