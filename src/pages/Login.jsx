import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb } from "../components/common/Breadcrumb";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../app/slice/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => {
        // when status code in 2's line
        toast("Login successful!");
        navigate("/");
        dispatch(setUser(res.data.user));
        localStorage.setItem("access_token", res.data.access_token);
      })
      .catch((err) => {
        toast.error("Invalid creadentails");
        // when status code 3,4,5
      });
  };
  return (
    <>
      <Breadcrumb
        title="Login"
        links={[
          { title: "home", url: "/" },
          { title: "login", url: "#" },
        ]}
      />
      <div className="flex justify-center">
        <div className="mb-96 mt-9 grid h-96 w-80 place-content-center font-lato shadow-2xl  lg:mt-28 lg:h-[474px] lg:w-[544px]">
          <div className=" text-center">
            <p className=" mb-2 font-josefin text-2xl font-bold md:text-4xl">
              Log In
            </p>
            <div className="text-sm text-slate-400">
              Please log in using account detail below.
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-3 grid place-items-center gap-2 text-center"
            >
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="email"
                value="b@b.com"
                name="email"
                placeholder="Email Address"
              />
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="password"
                value="password"
                name="password"
                placeholder="Password"
              />
              <p className="text-sm text-slate-400 md:text-base">
                Forgot your password?
              </p>
              <button
                type="submit"
                className="h-[47px] w-[230px] bg-customPink pb-1 text-white hover:bg-customBlue focus:outline-none lg:w-[432px] lg:font-bold"
              >
                Log In
              </button>
            </form>
            <div className="pt-3 text-sm text-slate-400 md:text-base">
              Don't have an account?{" "}
              <span>
                <Link className="hover:underline" to="/signup">
                  Create an account!
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
