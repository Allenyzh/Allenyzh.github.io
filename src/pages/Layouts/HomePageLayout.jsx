import { Outlet } from "react-router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
export default function HomePageLayout() {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:h-screen h-dvh">
        <NavBar />
        <div className="flex-1 h-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
