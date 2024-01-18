import { Breadcrumb } from "../components/common/Breadcrumb";

const Login = () => {
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
            <form className="mt-3 grid place-items-center gap-2 text-center">
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="h-12 w-[230px] border-2 pl-3 text-sm focus:border-customPink focus:outline-none lg:w-[432px]"
                type="text"
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
              Don't have an account? Create account!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
