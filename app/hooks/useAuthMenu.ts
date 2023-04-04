import { isJsxOpeningElement } from 'typescript';
import {create} from 'zustand'

interface AuthMenuStore{
    isOpen:boolean;
    toggleOpen:()=>void;
}

const useAuthMenu = create<AuthMenuStore>((set)=>({
    isOpen:false,
    toggleOpen:()=>set((state)=>({isOpen:!state.isOpen})),

}));

export default useAuthMenu;