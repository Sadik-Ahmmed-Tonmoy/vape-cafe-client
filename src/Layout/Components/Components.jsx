import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Components = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-5"
        >
          <GiHamburgerMenu />
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 bg-base-200 text-base-content min-h-screen md:w-64">
          {/* Sidebar content here */}
          <>
            <li tabIndex={0}>
              <details>
                <summary>Devices</summary>
                <ul className="p-2">
                  <li className="mb-1">
                    <NavLink to="/components/highEnd">High End</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Box Mods</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Starter Kits</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Pod Systems</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Atomizers</summary>
                <ul className="p-2">
                  <li className="mb-1">
                    <NavLink>Rebuildables</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>SUB-OHM Tanks</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>E-Liquids</summary>
                <ul className="p-2">
                  <li className="mb-1">
                    <NavLink>Nicsalt</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Free Base</NavLink>
                  </li>
                </ul>
              </details>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>Accessories</summary>
                <ul className="p-2">
                  <li className="mb-1">
                    <NavLink>Replacement Coils, <br/> Pod & RBA</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Vape Accessories</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Rebuildable Materials</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Batteries & Chargers</NavLink>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink to="/components/disposables">Disposables</NavLink>
            </li>
          </>
          <div className="divider"></div>
        
              
               
                  <li className="mb-1">
                    <NavLink to="/"><FaHome/> Home</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Vape Accessories</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Rebuildable Materials</NavLink>
                  </li>
                  <li className="mb-1">
                    <NavLink>Batteries & Chargers</NavLink>
                  </li>
            
        </ul>
      </div>
    </div>
  );
};

export default Components;