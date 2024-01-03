import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { drawerLogo, drawerText } from "../../../images";
import { useSelector } from "react-redux";
import { selectDrawer } from "../../../store/drawer/drawerSlice";
import { useDrawerActions } from "../../../store/drawer/drawerAction";

export default function DrawerHeader({ display }: any) {
  const drawerData = useSelector(selectDrawer);
  const drawerOpen = drawerData.drawer?.open;

  const { setDrawerOpen } = useDrawerActions();

  const router = useRouter();
  const navigateHome = () => router.push("/");
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
        <Image
          className="cursor-pointer"
          src={drawerLogo}
          alt="drawerLogo"
          onClick={navigateHome}
          width={24}
          height={24}
        />
      ) : (
        <Image
          className="cursor-pointer w-36 md:w-44 mr-0.5"
          src={drawerText}
          alt="drawerText"
          onClick={navigateHome}
          width={500}
          height={500}
        />
      )}
    </div>
  );
}
