import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white p-5">
      <nav className="m-20 lg:flex  md:flex justify-between items-center">
        <img src="https://i.ibb.co/30vTrKS/Logo.png" alt="" />
        <ul className="md:flex gap-10">
          <li>
            
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
