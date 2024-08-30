
export default function Collections() {
  return (
    <div className='bg-[url("/images/collection-bg.png")] bg-cover bg-center bg-no-repeat md:px-28 px-4 my-10'>
      <div className="flex md:flex-row items-center justify-between h-[580px]">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="/images/zara-logo.png" alt="zara logo" />
          <p className="text-white md:w-1/2 my-8 leading-[32px] capitalize text-lg font-bold">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
          </p>
          <a href="#products">
            <button className="py-2 px-4 bg-white text-black font-semibold rounded-sm">
              see collection
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
