import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import Cards from '../../components/Cards';
import Loading from '../../components/Loading';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [category, setCategory] = useState('all');
  const [filter, setFilter] = useState('default');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setTimeout(() => {
          setProducts(data);
          setFilteredItems(data);
          setIsLoading(false);
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const showAll = () => {
    setCategory('all');
    setFilteredItems(products);
  };
  const filterItems = (category) => {
    const filtered = products.filter((item) => item.category == category);
    setFilteredItems(filtered);
    setCategory(category);
  };
  const handleSort = (e) => {
    const filtered = [...filteredItems];
    switch (e.target.value) {
      case 'A-Z':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'Z-A':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'low-to-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'high-to-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(filtered);
    setFilter(e.target.value);
  };
  return (
    <div id='products' className="max-w-screen-4xl container mx-auto xl:px-28 px-4 mb-12">
      <div className="title">Or subscribe to the newsletter</div>
      <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 flex-wrap mb-20">
        <div className="flex flex-row md:items-center justify-start md:gap-10 gap-4 flex-wrap">
          <button
            className={`text-xl  ${
              category == 'all' ? 'font-semibold' : 'font-light'
            }`}
            onClick={showAll}
          >
            All Products
          </button>
          <button
            className={`text-xl  ${
              category == 'Dress' ? 'font-semibold' : 'font-light'
            }`}
            onClick={() => filterItems('Dress')}
          >
            T-Shirt
          </button>
          <button
            className={`text-xl  ${
              category == 'Hoodies' ? 'font-semibold' : 'font-light'
            }`}
            onClick={() => filterItems('Hoodies')}
          >
            Hoodies
          </button>
          <button
            className={`text-xl  ${
              category == 'Bag' ? 'font-semibold' : 'font-light'
            }`}
            onClick={() => filterItems('Bag')}
          >
            Bags
          </button>
        </div>
        <div className="flex justify-end items-center bg-black rounded-sm">
          <div className="bg-black p-2 rounded-sm">
            <FaFilter className="size-5 text-white" />
          </div>
          <select
            className="bg-black text-white p-2 font-semibold rounded-sm"
            value={filter}
            onChange={handleSort}
          >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="high-to-low">High to Low</option>
            <option value="low-to-high">Low to High</option>
          </select>
        </div>
      </div>
      {isLoading ? <Loading /> : <Cards filteredItems={filteredItems} />}
    </div>
  );
}
