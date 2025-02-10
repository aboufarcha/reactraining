import { FaSpotify } from "react-icons/fa6";

import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";
import SocialNeworkForm from "../../components/loginForm/SocialNetworkForm";

const Login = () => {
  return (
    <div className="items-center justify-center min-h-screen flex flex-col items-stretch font-body bg-black md:bg-gradient-to-b md:from-zinc-900 md:to-black">
      <main className=" self-center w-full max-w-[46rem] flex flex-col items-stretch gap-8 px-8 md:px-28 md:py-20 pb-20 md:rounded-lg bg-black">
        <Link
          to={"/"}
          className="flex items-center justify-center gap-x-0.5 text-neutral-50"
        >
          <FaSpotify className="w-12 h-12"></FaSpotify>
        </Link>
        <h1 className="text-4xl font-spotifyMix  md:text-center md:mb-7 font-bold text-neutral-50">
          Log in to Spotify
        </h1>

        <div className="flex flex-col gap-2 md:px-[5.5rem]"></div>

        <LoginForm></LoginForm>

        <div className="flex flex-col gap-5 items-center text-center">
          <Link to="#" title="Forgot your password ?" />

          <div className="flex flex-col gap-1 md:gap-2 md:flex-row">
            <p className="text-zinc-400">Don&apos;t have an account?</p>
            <Link to="#" title="Sign up for Spotify" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
