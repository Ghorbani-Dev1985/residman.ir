import { ArrowsUpDownIcon , ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
type SortProp = {
    setSortByDate : Dispatch<SetStateAction<boolean>>
}
const SortPostLink: React.FC<SortProp> = ({setSortByDate}) => {
    return(
        <div className="w-full flex justify-between items-center my-6">
        <p onClick={() => setSortByDate((prev) => !prev)} className="flex justify-center items-center gap-x-1.5 cursor-pointer text-zinc-400 hover:text-zinc-800 transition-colors select-none"><ArrowsUpDownIcon className="size-5"/>مرتب سازی تاریخ</p>
        <Link target="_blank" href="http://tracking.post.ir/" className="flex justify-center items-center gap-x-1.5 bg-sky-100 text-sky-500 font-bold hover:bg-white px-1.5 md:px-5 py-2 rounded-lg transition-colors">
        <ArrowTopRightOnSquareIcon className="size-5 -rotate-90"/>
       <span className="select-none text-sm md:text-base">پیگیری سفارش</span> </Link>
      </div>
    )
}

export default SortPostLink;