import React, { useState } from "react";
import Input from "../components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState('login'); 

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
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Username"
                onChange={(ev) => setName(ev.target.value)}
                id="name"
                value={name}
              />

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
            <button className="bg-red-600 py-3 rounded-md text-white  w-full mt-10 hover:bg-red-700 transition">
              Login
            </button>
            <p className="text-neutral-500 mt-12">
              First time using Netflix?
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Create and account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
