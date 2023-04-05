'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps{
    selected?:boolean;
    label:string;
    icon:IconType;
    description?:string;
}

const CategoryBox:React.FC<CategoryBoxProps> = ({
    label,
    icon:Icon,
    selected
}) => {
    const router= useRouter();
    const params = useSearchParams(); //let me read the query string

    const handleClick= useCallback(()=>{

        let currentQuery = {};

        if(params){
            currentQuery=qs.parse(params.toString());
        }
        //what we want is that when we click on the label Beach, the query gets updated
        //accordingly, and if we click again we want to reset it

        //in the next snippet we spread the query we get from useSearchParams() and we add the new category
        const updatedQuery:any = {
            ...currentQuery,
            category:label
        }

        //we remove the query if it's already selected and we click on the icon again ('es /?category=beach')
        if(params?.get('category')===label){
            delete updatedQuery.category;
        }

        //now we generate the url to pass to the router. Pathname is always going to be '/'
        const url = qs.stringifyUrl({
            url:'/',
            query:updatedQuery
        },{skipNull:true});

        router.push(url);
        
    },[label,params,router]);

    
    return (
    <div
        onClick={handleClick}
        className=
            {`flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected?'border-b-neutral-800':'border-transparent'}
            ${selected?'text-neutral-800':'text-neutral-500'}
            `}
        >
            <Icon size={26}/>
            <div className="font-medium text-sm">
                {label}
            </div>

    </div>
  )
}

export default CategoryBox