import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";

function Home() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  return (
    <>
      <Navbar/>
    <Billboard/>
    </>
  );
}
export default Home;
