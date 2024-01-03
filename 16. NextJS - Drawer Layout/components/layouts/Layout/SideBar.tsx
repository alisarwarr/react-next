import Divider from "@mui/material/Divider";
import DrawerHeader from "./DrawerHeader";
import DrawerList from "./DrawerList";
import { selectDrawer } from "../../../store/drawer/drawerSlice";
import { useSelector } from "react-redux";

export default function SideBar({ display }: any) {
  const drawerData = useSelector(selectDrawer);
  const bgColor = drawerData.bgColor;

  return (
    <>
      {
        <div
          className="transform transition-transform translate-x-0 h-screen overflow-x-hidden overflow-y-auto"
          style={{ backgroundColor: bgColor }}
        >
          <DrawerHeader display={display}/>
          <Divider />
          <DrawerList display={display}/>
        </div>
      }
    </>
  );
}
