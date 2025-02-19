import { HiEllipsisHorizontal } from "react-icons/hi2";
import { IoMdPlay } from "react-icons/io";

const Follow = () => {
  return (
    <div className="w-full flex items-center gap-x-7 py-1">
      <div className="md:w-14 text-neutral-50 sm:w-12 w-10 md:h-14 sm:h-12 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-105 cursor-pointer ease-in-out duration-300">
        <IoMdPlay className="md:w-7 w-6 md:h-7 h-6 ml-1" />
      </div>
      <button
        className="w-fit h-8 rounded-full px-4 border border-neutral-500 hover:border-neutral-200 text-neutral-200 text-sm font-meduim hover:scale-105 
            cursor-pointer ease-in-out duration-100"
      >
        Follow
      </button>

      <button className="text-neutral-500 text-4xl hover:text-neutral-20 hover:scale-110 cursor-pointer ease-in-out duration-100">
        <HiEllipsisHorizontal />
      </button>
    </div>
  );
};

export default Follow;
