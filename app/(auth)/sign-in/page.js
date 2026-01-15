"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { IconLoader2 } from "@tabler/icons-react";

function login() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const localData = localStorage.getItem("Current User");
    if (localData) {
      router.push("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [authStatus, setAuthStatus] = useState();
  const [error, setError] = useState("");

  async function atSubmit(data) {
    setLoading(true);
    try {
      const res = await axios.post("/backend/api/signin", data);

      if (res.data.success) {
        localStorage.setItem("Current User", JSON.stringify(res.data.user));
        router.push("/");
      }

      setAuthStatus(res.data.success);
      setError(res.data.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="  flex flex-col justify-center items-center h-screen  p-4">
      <h1 className="font-bold text-2xl mb-10">Login</h1>
      <form onSubmit={handleSubmit(atSubmit)} className="w-full max-w-sm">
        <div className="flex flex-col justify-center items-center gap-4    ">
          <div className="w-full">
            <input
              placeholder="User Name"
              className="w-full  active:outline-gray-100 active:outline-2 outline-none focus:outline  border  border-gray-100  p-2 rounded-2xl focus:outline-gray-100"
              {...register("userName", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            ></input>
            {errors.userName && (
              <p className="text-red-600 mb-2 mt-2">
                {errors.userName.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              className=" mb-4 w-full active:outline-gray-100 active:outline-2 outline-none focus:outline border  border-gray-100  p-2 rounded-2xl  focus:outline-gray-100"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            ></input>
            {errors.password && (
              <p className="text-red-600 mb-2 mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <p className="font-normal  ">
            New Here?{" "}
            <Link href="/sign-up" className="text-gray-400">
              Register Now
            </Link>
          </p>

          <p
            className={`  text-[16px] font-light ${
              authStatus == true ? "text-green-500" : "text-red-500"
            } `}
          >
            {" "}
            {error}{" "}
          </p>

          <button
            type="submit"
            disabled={loading}
            className="bg-gray-500 hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-[10px] text-white text-[20px] flex items-center justify-center"
          >
            {loading ? <IconLoader2 className="animate-spin" /> : "Login"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default login;
