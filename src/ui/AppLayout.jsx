import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    // at the start of css grid tutorial, teh three rows were stretched when grid andheigth were applied first, shwoing grid is true

    // using auto makes it just exactly teh size of the content while 1fr shoudl fill the remaining space
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      {/* overflow-scroll makes only the main sect. scrollable while header and cartoverview are static */}
      {/* for fluid deisgns,use max-w and mx-auto trick to  cneter contenet  */}
      <div className="overflow-scroll">
        {/* using div to escape the grid influence */}
        <main className="b mx-auto max-w-3xl">
          {/* to render child routes */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
