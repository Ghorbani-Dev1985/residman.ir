import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
const Alert = ({children , alertText} : {children?: React.ReactNode , alertText: string}) => {
    return (  <div className="w-full flex items-center gap-1.5 bg-sky-100 text-sky-500 px-4 py-3 rounded-xl"><InformationCircleIcon className="stroke-sky-500 size-5"/>{alertText} {children}</div> );
}
 
export default Alert;