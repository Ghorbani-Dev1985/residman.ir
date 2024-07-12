"use client";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SearchCodeResult } from "@/types/type.d";
import { CalendarDaysIcon, MapPinIcon , ClipboardDocumentIcon} from "@heroicons/react/24/outline";
import SortPostLink from "@/components/SortPostLink";
const Home: React.FC = () => {
  const [searchCode, setSearchCode] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [sortByDate , setSortByDate] = useState<boolean>(true)
  const SearchCodeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCode(e.target.value);
    if (searchCode.length >= 2) {
     await axios
        .get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/entries?search={"field_filters":[{"key":1,"value": "${searchCode}" ,"operator":"contains"}]}&paging[page_size]=24`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            auth: {
              username: `${process.env.NEXT_PUBLIC_USER_NAME}`,
              password: `${process.env.NEXT_PUBLIC_PASSWORD}`,
            },
          }
        )
        .then((res) => {
          setSearchResult(res.data.entries);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
    }
  };
  let SortBySearchResult;
  if(sortByDate){
    SortBySearchResult = [...searchResult].sort((dateOne : SearchCodeResult  , dateTow : SearchCodeResult) => +new Date(dateTow["3"]) - +new Date(dateOne["3"]))
  }else{
    SortBySearchResult = [...searchResult].sort((dateOne : SearchCodeResult  , dateTow : SearchCodeResult) => +new Date(dateOne["3"]) - +new Date(dateTow["3"]))
  }
 
  return (
    <>
      <input
        className="textField-input"
        value={searchCode}
        onChange={(e) => SearchCodeHandler(e)}
        placeholder="لطفا بخشی از نام خانوادگی خود را وارد نمایید و کد مرسوله خود را کپی نمایید"
      />
      {searchResult.length > 0 && (
        <Suspense fallback={<p>Loading feed...</p>}>
          <SortPostLink setSortByDate={setSortByDate}/>
          <section className="w-full grid md:grid-cols-2 lg:grid-cols-3 mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-700 md:mb-12 bg-white my-4 overflow-hidden h-screen overflow-y-scroll">
            {SortBySearchResult.map((item: SearchCodeResult) => {
              return (
                <div key={item.id}>
                  <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e relative z-20 overflow-hidden">
                    <blockquote className="w-full mx-auto text-gray-500">
                      <h3 className="text-2xl font-bold bg-sky-50 text-sky-500 p-1.5 rounded-lg">
                        {item["1"]}
                      </h3>
                      <div className="w-full flex justify-between items-center my-6">
                        <div className="flex justify-center items-center gap-x-1.5">
                          <MapPinIcon className="size-5" />
                          <p>{item["2"]}</p>
                        </div>
                        <div className="flex justify-center items-center gap-x-1.5">
                          <CalendarDaysIcon className="size-5" />
                          <p>{item["3"]}</p>
                        </div>
                      </div>
                    </blockquote>
                    <figcaption
                      onClick={() => {
                        navigator.clipboard.writeText(item["4"]);
                        toast.success("کد مرسوله با موفقیت کپی شد");
                      }}
                      className="w-full flex justify-between items-center text-sm font-bold md:text-lg xl:text-lg text-emerald-500 bg-emerald-50 px-1.5 py-3 rounded-lg border border-emerald-400 border-dotted cursor-pointer"
                    >
                      <ClipboardDocumentIcon className="size-5" />
                      <p>{item["4"]}</p>
                    </figcaption>
                    <div className="absolute -z-10 -right-36 bottom-0 size-64 bg-sky-100 opacity-40 rounded-full"></div>
                  </figure>
                </div>
              );
            })}
          </section>
        </Suspense>
      )}
    </>
  );
};

export default Home;
