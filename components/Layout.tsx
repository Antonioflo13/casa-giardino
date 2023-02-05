"use client";
//REACT
import { useEffect } from "react";
//STORE
import { useDispatch } from "react-redux";
import { setUiConfigs } from "@/store/slices/uiConfigs";
import { setNavbarItems } from "@/store/slices/navbar";
import { setMain } from "@/store/slices/main";
//INTERFACES
import { mainResponse } from "@/interfaces/main";
import { uiConfigsResponse } from "@/interfaces/uiConfigs";
//API
import { getNavbar } from "@/api/navbar";
import getUiConfigs from "@/api/uiConfigs";
import getMain from "@/api/main";
//COMPONENTS
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  //STORE
  const dispatch = useDispatch();

  //FUNCTIONS
  const handle = async () => {
    const navbar = await getNavbar();
    const uiConfig = await getUiConfigs();
    const main = await getMain();
    setGlobalVariable(uiConfig, main);
    dispatch(setUiConfigs(uiConfig));
    dispatch(setNavbarItems(navbar));
    dispatch(setMain(main));
  };

  //EFFECT
  useEffect(() => {
    handle();
  }, []);

  const setGlobalVariable = (
    uiConfig: uiConfigsResponse,
    main: mainResponse
  ) => {
    const myVariables = {
      "--primary": uiConfig.data.uiConfig.primary.hex,
      "--secondary": uiConfig.data.uiConfig.secondary.hex,
      "--bg-main": `url(${main.data.allMains[0].backgroundImage.url})`,
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
