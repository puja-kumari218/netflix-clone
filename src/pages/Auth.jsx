import React, { useCallback, useState } from "react";
import Input from "../components/Input";
import API from "../api";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import { redirect, useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const handleSubmit = () => {
    if (variant === "login") {
      toast.promise(API.auth.login(email, password), {
        loading: "Please wait we are siginin in...",
        success: (res) => {
          dispatch(setUser({ user: res.user, token: res.token }));
          navigate("/profiles");
          return res.message;
        },
      });
    } else {
      toast.promise(API.auth.register(name, email, password), {
        loading: "Please wait we are registering your account...",
        success: (res) => {
          setVariant("login");
          return res.message;
        },
      });
    }
  };

  return (
    <div className='relative h-screen w-full bg-[url("/images/netflix-home.jpeg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black lg:opacity-50 opacity-70 z-0"></div>

      {/* Content above overlay */}
      <div className="relative z-10 w-full h-full">
        {/* Logo */}
        <nav className="px-12 py-5">
          <h4 className="text-white text-2xl font-bold">MY.LOGO</h4>
        </nav>

        {/* Sign In box */}
        <div className="flex justify-center">
          <div className="bg-black opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  onChange={(ev) => setName(ev.target.value)}
                  id="name"
                  value={name}
                />
              )}

              <Input
                label="Email"
                onChange={(ev) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                id="password"
                value={password}
              />
            </div>
            <button
              className="bg-red-600 py-3 rounded-md text-white  w-full mt-10 hover:bg-red-700 transition"
              onClick={() => {
                handleSubmit();
              }}
            >
              {variant === "login" ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "First time using Netflix?"
                : "Alrerady have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
