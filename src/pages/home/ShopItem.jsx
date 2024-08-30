import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';

export default function ShopItem() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        const prd = data.filter((item) => item.id == id);
        setProduct(prd[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);
  const { title, price, image } = product;
  return (
    <div className="max-w-screen-4xl mt-40 mx-auto container xl:px-28 px-4">
      <div className="p-3 max-w-screen-4xl m-auto mx-auto">
        <div className="my-12 text-lg">
          <a href="/">Home</a>/
          <a href={`/shop/${id}`} className="font-semibold">
            Shop
          </a>
        </div>
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 h-max gap-6 ">
            <div>
              <img src={image} alt="product image" className="w-full" />
            </div>
            <div>
              <h2 className="title text-left">{title}</h2>
              <p className="font-light text-Black leading-[32px] text-justify text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <span className="text-yellow-600 text-xl my-6 flex items-center gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <div className="text-red-700 text-2xl font-semibold sm:text-3xl">
                ${price}
              </div>
              <div className="my-4 flex flex-col gap-3 w-full">
                <label htmlFor="quantity" className="font-bold text-lg">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  defaultValue={1}
                  required
                  className="border border-grey-600 px-3 py-2 rounded-md max-w-full w-full outline-none focus:border-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white flex gap-2 items-center py-3 px-5 my-4 rounded-md
                hover:bg-white hover:text-red-500 hover:border hover:border-red-500"
              >
                <span className="font-semibold">Confirm Order</span>
                <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
          <p className="font-light text-Black leading-[32px] text-justify text-base mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="font-light text-Black leading-[32px] text-justify text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="font-light text-Black leading-[32px] text-justify text-base mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
