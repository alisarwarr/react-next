import ListItem from "@mui/material/ListItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDrawer } from "../../../store/drawer/drawerSlice";
import { useDrawerActions } from "../../../store/drawer/drawerAction";

interface MenuItemProps {
  menu: any;
  nestedClass?: string;
  display: boolean;
}
export default function MenuItem({ menu, nestedClass, display }: MenuItemProps) {
  const navigate = useNavigate();

  const drawerData = useSelector(selectDrawer);
  const textColor = drawerData.textColor;
  const selectedBgColor = drawerData.selectedBgColor;
  const selectedTextColor = drawerData.selectedTextColor;
  const lineOnSelect = drawerData.lineOnSelect;
  const bgOnSelect = drawerData.bgOnSelect;
  const sidebarSmall = drawerData.sidebarSmall;
  const drawer = drawerData.drawer;

  const { setDrawer_, setDrawerExpendKey, setDrawerExpendKeyAndMenu } =
    useDrawerActions();

  return (
    <ListItem
      disablePadding
      disabled={menu.disable}
      className="m-2 ml-4 !w-[90%] cursor-pointer pt-2 pb-2 pr-3.5 pl-3"
      sx={{
        color:
          drawer?.activeMenu?.url === menu.url ? selectedTextColor : textColor,
        borderLeft:
          lineOnSelect && drawer?.activeMenu?.url === menu.url
            ? `4px solid ${selectedTextColor}`
            : `4px solid transparent`,
        backgroundColor:
          bgOnSelect && drawer?.activeMenu?.url === menu.url
            ? selectedBgColor
            : "transparent",
      }}
      onClick={() => {
        setDrawerExpendKey({
          expendKey: menu.name,
        });

        if (menu.disable) {
          return;
        }

        if (menu.name === "logout") {
          // userLogout();
        }

        if (menu?.url) {
          if (menu.url !== drawer.activeMenu) {
            setDrawer_({
              ...drawerData,
              drawer: {
                ...drawerData.drawer,
                activeMenu: menu,
              },
            });

            navigate(menu.url);
          }
        } else {
          setDrawerExpendKeyAndMenu({
            expendMenu:
              drawer?.expendKey === menu.name ? !drawer?.expendMenu : true,
            expendKey: menu.name,
          });
        }
      }}
    >
      <div className={`flex-1 flex items-center -ml-1 ${nestedClass}`}>
        <span className="mr-3 ml-1">
          {menu.icon(
            drawer?.activeMenu?.url === menu.url ? selectedTextColor : textColor
          )}
        </span>
        {!sidebarSmall && (
          <span className={`mt-0.5 text-xs xl:text-base whitespace-nowrap ${!display&&`hidden`}`}>
            {menu.name}
          </span>
        )}
      </div>
      {menu?.options?.length > 0 &&
        !sidebarSmall &&
        (drawer?.expendMenu && menu.name === drawer?.expendKey ? (
          <ExpandLessIcon
            className="!text-[14px] sm:!text-[18px]"
          />
        ) : (
          <ExpandMoreIcon
            className="!text-[14px] sm:!text-[18px]"
          />
        ))}
    </ListItem>
  );
}
