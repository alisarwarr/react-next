//REDUX-TOOLKIT
import { useDispatch, useSelector } from "react-redux";
import { DrawerSliceState, selectDrawer, setDrawer } from "./drawerSlice";


export const useDrawerActions = () => {
    const dispatch = useDispatch();
    const drawerData = useSelector(selectDrawer);

 
    const setDrawer_ = (data: DrawerSliceState) => {
        dispatch(setDrawer(data));
    }

    const setDrawerExpendKey = ({ expendKey }: { expendKey: string }) => {
        dispatch(setDrawer({
            ...drawerData,
            drawer: {
                ...drawerData.drawer,
                expendKey
            }
        }));
    }

    const setDrawerActiveMenu = (menu: any) => {
        dispatch(setDrawer({
            ...drawerData,
            drawer: {
                ...drawerData.drawer,
                activeMenu: menu
            }
        }));
    }

    const setDrawerExpendKeyAndMenu = ({ expendMenu, expendKey }: { expendMenu: boolean, expendKey: string }) => {
        dispatch(setDrawer({
            ...drawerData,
            drawer: {
                ...drawerData.drawer,
                expendKey,
                expendMenu
            }
        }));
    }
  
    const setDrawerOpen = (newOpen: boolean) => {
        dispatch(setDrawer({
            ...drawerData,
            drawer: {
                ...drawerData.drawer,
                open: newOpen
            }
        }));
    }
  
    const setSidebarSmall = () => {
        dispatch(setDrawer({
            sidebarSmall: !drawerData.sidebarSmall
        }));
    }


    return {
        setDrawer_,
        setDrawerExpendKey,
        setDrawerActiveMenu,
        setDrawerExpendKeyAndMenu,
        setDrawerOpen,
        setSidebarSmall
    }
}