import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    user && (
      <div className="absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img
          className="w-40 p-4"
          src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
          alt="logo"
        />

        <div className="flex mr-4 items-center text-white ">
          <img
            src={user?.photoURL}
            alt="profile"
            className="rounded-full w-10 h-10 mr-4"
          />
          <button onClick={handleSignOut} className="hover:text-red-500">
            SignOut
          </button>
        </div>
      </div>
    )
  );
};

export default Header;
