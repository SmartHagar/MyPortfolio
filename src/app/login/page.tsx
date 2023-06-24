/** @format */
"use client";
import useLogin from "@/store/auth/login";
import { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // store
  const { setLogin } = useLogin();
  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await setLogin({
      email,
      password,
    });
    const { status, data } = res;
    if (status === "success") {
      // simpan token ke local storage
      localStorage.setItem("token", data?.token);
    }
  };
  return (
    <div className="min-h-screen h-screen">
      <div className="flex h-full lg:w-[80%] justify-center items-center">
        <div className="bg-black px-8 py-4 rounded-lg shadow-lg shadow-secondary">
          <form onSubmit={onSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-black"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-black"
                />
              </div>
              <div className="flex items-baseline justify-between mt-6">
                <button className="px-6 py-2 text-white bg-primary rounded-lg hover:bg-secondary">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
