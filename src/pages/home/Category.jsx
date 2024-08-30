import { Link } from "react-router-dom";

const brands = [
  { id: 1, img: '/images/brands/brand1.png' },
  { id: 2, img: '/images/brands/brand2.png' },
  { id: 3, img: '/images/brands/brand3.png' },
  { id: 4, img: '/images/brands/brand4.png' },
  { id: 5, img: '/images/brands/brand5.png' },
];
export default function Category() {
  return (
    <div className="max-w-screen-4xl mx-auto px-4 py-20 lg:px-28 ">
      <div className="flex items-center justify-around flex-wrap py-8 gap-8">
        {brands.map(({ id, img }) => (
          <img src={img} alt="brand" key={id} />
        ))}
      </div>
      <div className="flex items-center gap-4 flex-col md:flex-row mt-10">
        <p className="uppercase md:-rotate-90 text-Black text-center font-light text-lg lg:text-3xl lg:w-80 w-64 md:p-2 p-3 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              src="/images/cats/image1.png"
              alt="model"
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div className="">
          <div className="grid grid-cols-2 gap-6">
            <Link to="/">
              <img
                src="/images/cats/image2.png"
                alt="model"
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/cats/image3.png"
                alt="model"
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/cats/image4.png"
                alt="model"
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/images/cats/image5.png"
                alt="model"
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
