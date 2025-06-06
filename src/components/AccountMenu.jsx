import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const AccountMenu = ({ visible }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logout());
    window.location.reload();
  };

  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-55 absolute top-14 right-0 py-5 flex-col border border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/items flex flex-row gap-3 items-center w-full">
          <img
            className="w-6 rounded-md"
            src="/images/netflix-default.jpg"
            alt=""
          />
          <p className="text-white text-sm group-hover/item:underline ">
            {user?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
