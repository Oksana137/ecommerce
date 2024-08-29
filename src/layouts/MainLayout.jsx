import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const MainLayout = ({ cartQuantities }) => {
  return (
    <>
      <Navigation cartQuantities={cartQuantities} />
      <Outlet />
    </>
  );
};

export default MainLayout;
