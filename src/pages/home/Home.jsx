import Banner from "./Banner"
import BestSells from "./BestSells"
import Category from "./Category"
import Collections from "./Collections"
import NewsLetter from "./NewsLetter"
import Products from "./Products"
export default function Home() {
  return (
    <div>
        <Banner/>
        <Category/>
        <Products/>
        <Collections/>
        <BestSells/>
        <NewsLetter/>
    </div>
  )
}
