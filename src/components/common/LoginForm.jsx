import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/slice/userSlice";
import { API_URL } from "./constants/domian";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_URL}/users/login`, {
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
      <div className="mb-96 grid h-96 w-80 place-content-center font-lato shadow-2xl lg:h-[474px] lg:w-[544px]">
        <div className="w-[350px] text-center">
          <p className="mb-2 font-josefin text-2xl font-bold md:text-4xl">
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
              className="form-control"
              type="email"
              // defaultValue="b@b.com"
              name="email"
              placeholder="Email Address"
            />
            <input
              className="form-control"
              type="password"
              defaultValue="password"
              name="password"
              placeholder="Password"
            />
            <p className="text-sm text-slate-400 md:text-base">
              Forgot your password?
            </p>
            <button type="submit" className="btn mt-5 h-full w-full">
              Log In
            </button>
          </form>
          <div className="pt-3 text-sm text-slate-400 md:text-base">
            Don't have an account?
            <span>
              <Link className="hover:underline" to="/signup">
                Create an account!
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
