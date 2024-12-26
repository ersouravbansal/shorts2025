import { Link, Outlet, useLocation } from "@remix-run/react";
// import MainNavigation from "./MainNavigation";
import { Suspense, lazy } from "react";
const MainNavigationComponent = lazy(() => import("./MainNavigation"));
const Header = () => {

  return (
    <>
      {/*====== Content ( LHS, Main Content and RHS ) ======*/}
      <div className="vjl-cntr_full h-100">
        <div className="vjl-row h-100">
          {/*=== LHS ===*/}

          {/*=== Middle ===*/}
          <div className="VdPg-Col_Two VdPg-Col_P0 BepSlCol">
            {/*====== Logo, Main Navigation & Right Icons Live Tv, Notification and Search ======*/}
              <Suspense fallback={<></>}>
                <MainNavigationComponent />
              </Suspense>
            {/*====== Sub Navigation Widget ======*/}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
