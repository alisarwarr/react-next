import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useDrawerActions } from "../../../store/drawer/drawerAction";

interface HeaderProp {
  display: boolean;
  setDisplay: (bool: boolean) => void;
}

export default function Header({
  display,
  setDisplay,
}: HeaderProp) {
  const { setDrawerOpen } = useDrawerActions();

  return (
    <div className="h-full flex items-center">
      <div className="block md:hidden m-3">
        <IconButton onClick={() => setDrawerOpen(true)}>
          <MenuIcon className="!text-[#D37800]" fontSize="small" />
        </IconButton>
      </div>
      <div className="hidden md:block m-3">
        <IconButton
          onClick={() => setDisplay(!display)}
        >
          <MenuIcon className="!text-[#D37800]" fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
}
