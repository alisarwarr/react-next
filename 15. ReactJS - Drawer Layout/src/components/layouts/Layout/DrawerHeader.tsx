import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { drawerLogo, drawerText } from "../../../images";
import { useSelector } from "react-redux";
import { selectDrawer } from "../../../store/drawer/drawerSlice";
import { useDrawerActions } from "../../../store/drawer/drawerAction";

export default function DrawerHeader({ display }: any) {
  const drawerData = useSelector(selectDrawer);
  const drawerOpen = drawerData.drawer?.open;

  const { setDrawerOpen } = useDrawerActions();

  const navigate = useNavigate();
  const navigateHome = () => navigate("/");
  const toggleDrawer = () =>
    drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true);

  return (
    <div className="h-[64px] flex justify-evenly items-center">
      <div className="md:hidden -ml-3.5">
        <IconButton onClick={toggleDrawer}>
          <CloseIcon fontSize="small" className="text-[#D37800]" />
        </IconButton>
      </div>
      {!display ? (
        <img
          className="cursor-pointer"
          src={drawerLogo}
          alt="drawerText"
          onClick={navigateHome}
        />
      ) : (
        <img
          className="cursor-pointer w-36 md:w-44 -ml-0.5"
          src={drawerText}
          alt="drawerText"
          onClick={navigateHome}
        />
      )}
    </div>
  );
}
