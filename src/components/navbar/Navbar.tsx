import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import useUserStore from "../../hooks/useUserStore";
import Avatar from "../avatar/Avatar";

const Navbar = (className: any) => {
  const { username } = useUserStore();
  console.log("username : ", username);
  const handleBack = () => {
    window.history.back();
  };

  const handleNext = () => {
    window.history.forward();
  };

  return (
    <div
      className={`w-full ${className} flex items-center justify-between md:pl-4 md:pr-7 sm:pr-5 pr-4 py-2 z-50`}
    >
      {/* Arrow */}
      <div className="flex items-center gap-x-2">
        <button
          onClick={handleBack}
          className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center"
        >
          <GoChevronLeft className="w-7 h-7 mr-0.5"></GoChevronLeft>
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 rounded-full bg-neutral-950/70 text-neutral-400 flex items-center justify-center"
        >
          <GoChevronRight className="w-7 h-7 mr-0.5"></GoChevronRight>
        </button>
      </div>

      {/* Buttons */}
      {username === "" ? (
        <div className="flex items-center gap-x-5">
          <button className="w-fit text-neutral-400 text-sm font-semibold hover:scale-105 ease-in-out duration-100">
            Sign up
          </button>
          <Link
            to="/login"
            className="w-fit px-8 h-12 rounded-full bg-neutral-50 text-base text-neutral-900 font-semibold flex items-center justify-center hover:scale-105 ease-in-out duration-100"
          >
            Log in
          </Link>
        </div>
      ) : (
        <>
          <Avatar></Avatar>
        </>
      )}
    </div>
  );
};

export default Navbar;
