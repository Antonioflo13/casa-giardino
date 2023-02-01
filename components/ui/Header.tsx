//STORE
import { useSelector } from "react-redux";

interface navbar {
  logo: { url: string };
  navbarItems: [
    {
      id: number;
      name: string;
      handle: string;
      subItem: [{ id: number; name: string; handle: string }];
    }
  ];
  companyName: string;
}

const Header = (): JSX.Element => {
  //STATE
  const uiConfigs: { primary: string; secondary: string } = useSelector(
    (state: { uiConfigs: {} }) => state.uiConfigs
  );
  const navbar: navbar = useSelector(
    (state: { navbarItems: { navbarItems: {} } }) =>
      state.navbarItems.navbarItems
  );

  return (
    <header>
      <div
        style={{
          backgroundColor: `${uiConfigs.primary}`,
          color: `${uiConfigs.secondary}`,
        }}
        className="navbar"
      >
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
                    <ul className="p-2 bg-primary">
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
