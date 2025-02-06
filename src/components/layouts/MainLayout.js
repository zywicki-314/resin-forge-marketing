import { Outlet } from "react-router-dom";
import MainNav from "../nav-menu/main-nav";

const MainLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default MainLayout;
