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

  //FUNCTIONS
  const handle = async () => {
    let navbar = await getNavbar();
    const uiConfig = await getUiConfigs();
    setGlobalVariable(uiConfig);
    dispatch(setUiConfigs(uiConfig));
    dispatch(setNavbarItems(navbar));
  };

  //EFFECT
  useEffect(() => {
    handle();
  }, []);

  const setGlobalVariable = (uiConfig: {
    data: {
      uiConfig: { primary: { hex: string }; secondary: { hex: string } };
    };
  }) => {
    const myVariables = {
      "--primary": uiConfig.data.uiConfig.primary.hex,
      "--secondary": uiConfig.data.uiConfig.secondary.hex,
    };
    const root: HTMLElement | null = document.querySelector(":root");
    Object.entries(myVariables).forEach((v) =>
      root?.style.setProperty(v[0], v[1])
    );
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
