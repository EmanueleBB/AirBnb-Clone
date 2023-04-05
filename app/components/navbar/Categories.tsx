import Container from "../Container";
import {TbBeach} from 'react-icons/tb'
import {GiWindmill} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
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