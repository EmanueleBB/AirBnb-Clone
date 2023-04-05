'use client'


import {TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import {FaSkiing} from 'react-icons/fa'
import {BsSnow} from 'react-icons/bs'
import {IoDiamond} from 'react-icons/io5'

import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label:'Beach',
        icon: TbBeach,
        description:'This propery is close to the beach'
    },
    {
        label:'Windmills',
        icon: GiWindmill,
        description:'This propery has windmills!'
    },
    {
        label:'Modern',
        icon: MdOutlineVilla,
        description:'This propery is modern'
    },
    {
        label:'Countryside',
        icon: TbMountain,
        description:'This propery is in the countryside'
    },
    {
        label:'Pools',
        icon: TbPool,
        description:'This propery has a pool'
    },
    {
        label:'Islands',
        icon: GiIsland,
        description:'This propery has an island inside of it! Great'
    },
    {
        label:'Lake',
        icon: GiBoatFishing,
        description:'This propery has a lake iside the bathroom!'
    },
    {
        label:'Skiing',
        icon: FaSkiing,
        description:'This propery has a roof so steep and tall that you can ski over it!'
    },
    {
        label:'Castles',
        icon: GiCastle,
        description:'Do I even need to add a description?'
    },
    {
        label:'Camping',
        icon: GiForestCamp,
        description:'Our mosquitoes colony would like you to reserve one of these'
    },
    {
        label:'Arctic',
        icon: BsSnow,
        description:'Bring a blanket. Maybe two'
    },
    {
        label:'Cave',
        icon: GiCaveEntrance,
        description:'Back to the old days. Charkoal sticks included for your creative activities'
    },
    {
        label:'Desert',
        icon: GiCactus,
        description:'Water may not be included :('
    },
    {
        label:'Barns',
        icon: GiBarn,
        description:"I don't even know what a barn is. Let me ask chat GPT"
    },
    {
        label:'Lux',
        icon: IoDiamond,
        description:"This ain't gonna be cheap my brother"
    },
    
    
]

const Categories = () => {

    const params = useSearchParams();
    const category = params?.get('category')
    const pathname=usePathname();
    const isMainPage:boolean=pathname==='/'

    if (!isMainPage){
        return null;
    }

    return (
        <Container>
            <div
                className='
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto'>

                {categories.map((item)=>{
                    return(
                        <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category===item.label}
                        icon={item.icon}
                    />
                    )   
                })}
            </div>
        </Container>
  )
}

export default Categories