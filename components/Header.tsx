import Image from "next/image";

const Header: React.FC = () => {
    return(
     <header className="container flex justify-center items-center">
      <section className="w-full max-w-64 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl bg-white relative h-[114px] z-10 px-12">
        <Image
          width={35}
          height={112}
          alt="ghorbani-dev.ir"
          src="/images/startEndHeader.svg"
          className="absolute -right-8 top-0 -scale-x-[1] z-20"
        />
        <div className="flex justify-center h-full items-center">
        <div>logo</div>
       <p className="flex-1 text-center text-sm md:text-xl font-bold">سیستم دریافت کد مرسوله پستی</p>
        </div>
         <Image
          width={35}
          height={112}
          alt="ghorbani-dev.ir"
          src="/images/startEndHeader.svg"
          className="absolute -left-8 top-0 z-20"
        />

      </section>
     </header>   
    )
}

export default Header;