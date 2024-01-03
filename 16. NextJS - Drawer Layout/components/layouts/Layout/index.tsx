"use client";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Header from "./Header";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { selectDrawer } from "../../../store/drawer/drawerSlice";
import { useDrawerActions } from "../../../store/drawer/drawerAction";
import { useState } from "react";

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  const drawerData = useSelector(selectDrawer);
  const headerEnable = drawerData.headerEnable;
  const drawer = drawerData.drawer;

  const { setDrawerOpen } = useDrawerActions();

  const [display, setDisplay] = useState<boolean>(true);

  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Mobile sidebar  */}
      <SwipeableDrawer
        anchor="left"
        open={drawer?.open}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <SideBar display={display && display !== undefined}/>
      </SwipeableDrawer>
      {/* left side */}
      <aside
        className={`hidden md:flex z-10 flex-col transition-all transform shadow-sm ${
          !display ? `w-20` : ``
        }`}
      >
        <SideBar display={display && display !== undefined}/>
      </aside>
      {/* right side */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        {headerEnable && (
          <div className="h-[64px]">
            <Header display={display} setDisplay={setDisplay} />
          </div>
        )}
        <main className="flex-1 h-full overflow-y-scroll bg-[#eee] justify-center">
          {children}
        </main>
      </div>
    </div>
  );
}
