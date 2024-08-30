import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BestSells() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch("/products.json")
                const data=await response.json();
                setProducts(data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    },[])
    const bestSell = products.filter((item) => item.status === 'Best Selers');
  return (
    <div className="max-w-screen-4xl mx-auto xl:px-28 px-4 my-16">
      <div className="text-center">
        <h2 className="title">Best sellers</h2>
        <p className="text-Black font-light text-lg md:w-2/3 capitalize mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu
          nunc, fermentum quis sapien in, placerat scelerisque risus. Class
          aptent taciti sociosqu ad litora torquent per
        </p>
      </div>
      <div className="my-10">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          slidesPerView={1}
          spaceBetween={15}
          //   centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSell.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="mx-auto">
                  <Link to={`/shop/${item.id}`}>
                    <img
                      src={item.image}
                      alt="product"
                      className="mb-5 hover:scale-105 transition-all duration-200
                        mx-auto w-full"
                    />
                  </Link>
                  <div className="mb-2 text-lg font-light">{item.title}</div>
                  <div className="flex justify-between items-center mb-8">
                    <div className="text-black/50">{item.category}</div>
                    <div className="font-semibold">${item.price}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
