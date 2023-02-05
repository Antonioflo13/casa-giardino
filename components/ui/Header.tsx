//STORE
import { useSelector } from "react-redux";
//INTERFACES
import { uiConfigs } from "@/interfaces/uiConfigs";
import { navbar } from "@/interfaces/navbar";

const Header = (): JSX.Element => {
  //STATE
  const uiConfigs: uiConfigs = useSelector(
    (state: { uiConfigs: uiConfigs }) => state.uiConfigs
  );
  const navbar: navbar = useSelector(
    (state: { navbar: navbar }) => state.navbar
  );
  return (
    <header className={uiConfigs.headerSticky ? "fixed top-0 w-full" : ""}>
      <div className="navbar bg-prim text-sec">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            {navbar.companyName}
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navbar.navbarItems.map((navbarItem) => (
              <li key={navbarItem.id}>
                <>
                  <a>
                    {navbarItem.name}
                    {navbarItem.subItem.length > 0 && (
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    )}
                  </a>
                  {navbarItem.subItem.length > 0 && (
                    <ul className="p-2 bg-prim">
                      {navbarItem.subItem.map((subItem) => (
                        <li key={subItem.id}>
                          <a>{subItem.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
