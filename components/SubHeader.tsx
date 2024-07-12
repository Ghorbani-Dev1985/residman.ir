import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { CalculatorIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const SubHeader: React.FC = () => {
    const today = new Date().toLocaleDateString("fa-IR");
    return(
    <section className="container flex justify-center items-center">
      <div className="w-full flex justify-between items-center max-w-60 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        {/* Right Side */}
        <div className="h-[49px] relative z-10">
           <Image
          width={15}
          height={52}
          alt="ghorbani-dev.ir"
          src="/images/startEndSubHeader.svg"
          className="absolute -right-3 top-0 -scale-x-[1] z-20"
        />
        <div className="w-full max-w-36 md:max-w-48 flex justify-center h-full items-center gap-x-1.5 bg-sky-500 font-bold text-xs md:text-base text-white px-1 md:px-4 py-3">
            <CalculatorIcon className="size-5"/>
            {today}</div>
            <Image
          width={15}
          height={52}
          alt="ghorbani-dev.ir"
          src="/images/startEndSubHeader.svg"
          className="absolute -left-3 top-0 z-20"
        /> 
        </div>
        {/* Left Side */}
        <div className="h-[49px] relative z-10">
           <Image
          width={15}
          height={52}
          alt="ghorbani-dev.ir"
          src="/images/startEndSubHeader.svg"
          className="absolute -right-3 top-0 -scale-x-[1] z-20"
        />
        <Link target="_blank" href="https://eynakpanda.ir/" className="w-full max-w-32 md:max-w-48 flex justify-center h-full items-center gap-x-1.5 bg-sky-500 font-bold text-xs md:text-base text-white px-1 md:px-4 py-3">
            <ArrowLongLeftIcon className="size-5"/>
            مشاهده فروشگاه
            </Link>
            <Image
          width={15}
          height={52}
          alt="ghorbani-dev.ir"
          src="/images/startEndSubHeader.svg"
          className="absolute -left-3 top-0 z-20"
        /> 
        </div>
      </div>
    </section>
    )
}

export default SubHeader;