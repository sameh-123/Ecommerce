import { Link } from "react-router-dom"

export default function Cards({filteredItems}) {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-16 items-center justify-center 
    gap-12 shadow-sm">
        {
            filteredItems.map(item=>{
                return (
                  <div key={item.id} className="mx-auto">
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
                );
            })
        }
    </div>
  )
}
