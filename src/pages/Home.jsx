import React from "react";
import { useSelector } from "react-redux";
function Home() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="text-red-500 text-3xl">
      Welcome to Netflix {user?.email}
    </div>
  );
}
export default Home;
