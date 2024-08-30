import { Link } from 'react-router-dom';

export default function NewsLetter() {
  return (
    <div className="bg-primaryBG max-w-screen-4xl mx-auto xl:px-28 px-4 my-10 py-20">
      <h2 className="title">Follow products and discounts on Instagram</h2>
      <div className="flex items-start justify-center gap-6 mb-20 flex-wrap">
        <Link>
          <img
            src="/images/insta/img2.png"
            alt="instagram"
            className="hover:scale-105 transition-all duration-200 ease-out"
          />
        </Link>
        <Link>
          <img
            src="/images/insta/img3.png"
            alt="instagram"
            className="hover:scale-105 transition-all duration-200 ease-out"
          />
        </Link>
        <Link>
          <img
            src="/images/insta/img4.png"
            alt="instagram"
            className="hover:scale-105 transition-all duration-200 ease-out"
          />
        </Link>
        <Link>
          <img
            src="/images/insta/img5.png"
            alt="instagram"
            className="hover:scale-105 transition-all duration-200 ease-out"
          />
        </Link>
        <Link>
          <img
            src="/images/insta/img6.png"
            alt="instagram"
            className="hover:scale-105 transition-all duration-200 ease-out"
          />
        </Link>
        <Link>
          <img
            src="/images/insta/img1.png"
            alt="instagram"
            className="hover:scale-105 transition-all duration-200 ease-out"
          />
        </Link>
      </div>
      <h2 className="title">Or subscribe to the newsletter</h2>
      <form className='flex flex-col sm:flex-row items-center justify-center gap-4'>
        <input
        placeholder='Email Address...'
          type="email"
          name="email"
          id="email"
          className="outline-none border-b-2 border-black bg-transparent px-4 py-1 w-96"
        />
        <button type='submit' className='border-b-2 border-black py-1 px-4 hover:scale-110 hover:border-orange-500'>
            Submit
        </button>
      </form>
    </div>
  );
}
