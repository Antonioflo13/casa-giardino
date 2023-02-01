"use client";
//REACT
import { useEffect } from "react";
//STORE
import { useDispatch } from "react-redux";
import { setUiConfigs } from "@/store/slices/uiConfigs";
import { setNavbarItems } from "@/store/slices/navbarItems";
//API
import { getNavbar } from "@/api/navbar";
import getUiConfigs from "@/api/uiConfigs";
//COMPONENTS
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  //STORE
  const dispatch = useDispatch();
  //EFFECT
  useEffect(() => {
    handle();
  }, []);

  const handle = async () => {
    let navbar = await getNavbar();
    const uiConfig = await getUiConfigs();
    dispatch(setUiConfigs(uiConfig));
    dispatch(setNavbarItems(navbar));
  };
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
