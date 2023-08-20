import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Logged Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const NavItems = (
    <>
      <li tabIndex={0}>
        <details>
          <summary>Devices</summary>
          <ul className="p-2 md:w-32">
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
          <ul className="p-2 md:w-32">
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
          <ul className="p-2 md:w-32">
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
          <ul className="p-2 md:w-32">
            <li className="mb-1">
              <NavLink>Replacement Coils, Pod & RBA</NavLink>
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
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItems}
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl">Vape-Cafe</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex z-10">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL && (
          <img
            referrerPolicy="no-referrer"
            className="rounded-full h-12 w-12 mx-2 hidden md:block"
            title={user?.displayName}
            src={user?.photoURL}
            alt=""
          />
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-outline btn-primary"
          >
            Logout
          </button>
        ) : (
          <button className="btn btn-outline btn-primary">
            <Link to="/userLogin">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
