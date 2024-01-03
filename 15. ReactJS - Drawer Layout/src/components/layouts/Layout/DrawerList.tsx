import React from "react";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { selectDrawer } from "../../../store/drawer/drawerSlice";
import { useDrawerActions } from "../../../store/drawer/drawerAction";
import { DrawerOption, drawer as drawerOptions } from "../../../utils/drawer";

export default function DrawerList({ display }: any) {
  const location = useLocation();

  const drawerData = useSelector(selectDrawer);
  const typeShow = drawerData.typeShow;
  const drawer = drawerData.drawer;

  const { setDrawerActiveMenu, setDrawerExpendKeyAndMenu } = useDrawerActions();

  React.useEffect(() => {
    setDrawerActiveMenu({
      activeMenu: location.pathname,
    });

    drawerOptions.forEach((drawerOption: any) => {
      drawerOption.options.forEach((menu: any) => {
        if (menu.url === location.pathname) {
          setDrawerExpendKeyAndMenu({
            expendMenu: false,
            expendKey: menu.name,
          });
          return;
        }

        menu.options.forEach((subMenu: any) => {
          if (subMenu.url === location.pathname) {
            setDrawerExpendKeyAndMenu({
              expendMenu: true,
              expendKey: menu.name,
            });

            return;
          }
        });
      });
    });
  }, [location]);

  return (
    <List className="w-48 md:w-56">
      {drawerOptions.map((item, index) => (
        <React.Fragment key={index}>
          {typeShow && item.type && (
            <div className="relative overflow-hidden ml-6 mt-2 mb-2">
              <span className="text-[0.65rem] text-xs">{item.type}</span>
              <span className="absolute top-1/2 left-0.5em transform -translate-y-1/2 ml-2 mt-0.5 sm:mt-0 bg-input h-[0.1rem] w-full"></span>
            </div>
          )}
          {item.options.map((menu: DrawerOption, i: number) => (
            <React.Fragment key={i}>
              <MenuItem menu={menu} display={display}/>
              {menu?.options.length > 0 && (
                <Collapse
                  timeout="auto"
                  unmountOnExit
                  in={drawer?.expendMenu && menu.name === drawer.expendKey}
                >
                  {menu?.options.map((subMenu: DrawerOption, index: number) => (
                    <MenuItem key={index} menu={subMenu} nestedClass="!ml-2" display={display} />
                  ))}
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
}
