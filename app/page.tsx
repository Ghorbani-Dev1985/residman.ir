"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [searchCode, setSearchCode] = useState("")
  const [searchResult , setSearchResult] = useState<object[] | []>([])
  console.log("aut" , searchCode)
  const SearchCodeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
    console.log("in" , searchCode)
    setSearchCode(e.target.value)
    if(searchCode.length >= 2){
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/entries?search={"field_filters":[{"key":1,"value": "${searchCode}" ,"operator":"contains"}]}` , {
          headers: {
            "Content-Type" : "application/json",
          },
          auth: {
            username : `${process.env.NEXT_PUBLIC_USER_NAME}`,
            password: `${process.env.NEXT_PUBLIC_PASSWORD}`
          }
        })
        .then((res) => {
          setSearchResult(res.data.entries)
        })
        .catch((err) => {
          console.log(err?.response?.data?.message)
       })
    }
  
  }

  console.log(searchResult)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <input value={searchCode} onChange={(e) => SearchCodeHandler(e)}/>
    {searchResult.length

    }
    </main>
  );
}
