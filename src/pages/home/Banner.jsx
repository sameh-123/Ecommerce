import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "/images/banner.png"
// import f1 from "/images/flower1.png"
export default function Banner() {
  return (
    <div className="bg-primaryBG pt-32 xl:px-28 px-4 w-full">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14 w-full">
        {/* <img src={f1} alt="flower" className="hidden lg:block size-64 object-contain absolute right-0"/> */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={bannerImg} alt="banner image" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl mb-12 font-light">COLLECTIONS</h1>
          <p className="text-4xl mb-12 font-thin leading-[45px]">
            you can explore and shop many differnt collection from various
            barands here.
          </p>
          <a href="#products">
            <button className="bg-Black text-white rounded-sm px-6 py-2 hover:bg-orange-400 flex items-center gap-2">
              <FaShoppingBag /> Shop Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
