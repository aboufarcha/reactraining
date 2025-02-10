import { FaPlay } from "react-icons/fa6";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useMusicContext } from "../../contexts/musicContext";

const MusicCard = () => {
  const music = useMusicContext();
  return (
    <div
      className="w-full grid md:grid-cols-4 grid-cols-3 grid-4
  items-center rounded-md px-6 py-2 group hover:bg-neutral-600/40 ease-in-out duration-100"
    >
      <div className="col-span-2 flex items-center gap-x-2">
        <p className="text-neutral-300 text-sm font-medium pt-1 md:block hidden">
          <span className="group-hover:hidden block w-5 h-5">{music.id}</span>
          <span className="group-hover:block hidden w-5 h-5 pt-0.5">
            <FaPlay />
          </span>
        </p>
        <img
          src="https://i1.sndcdn.com/artworks-000228763017-yj34kc-t500x500.jpg"
          alt=""
          className="w-10 h-10 rounded-md object-center object-cover"
        />
        <Link
          to={""}
          className="text-sm text-neutral-100 font-medium hover:underline ml-1 ease-in-out duration-100"
        >
          {music.title}
        </Link>
      </div>
      <div className="col-span-1 md:flex hidden items-center justify-center">
        <p className="text-sm text-neutral-400 font-medium group-hover:text-neutral-200 ease-in-out duraion-100">
          {music.views}
        </p>
      </div>
      <div className="col-span-1 md:flex hidden items-center justify-end gap-x-3">
        <p className="w-6 text-neutral-400 flex items-center justify-end mr-4">
          <MdFavoriteBorder className="group-hover:block hidden text-xl" />
        </p>
        <p className="text-base text-neutral-400 font-normal">
          {music.duration}
        </p>
        <p className="w-6 text-neutral-400 flex items-center justify-end ">
          <HiEllipsisHorizontal className="group-hover:block hidden text-2xl"></HiEllipsisHorizontal>
        </p>
      </div>
      <div className="col-span-1 md:hidden flex justify-end">
        <p className="w-6 text-neutral-400 flex items-center justify-end ">
          <HiEllipsisHorizontal className="group-hover:block hidden text-2xl"></HiEllipsisHorizontal>
        </p>
      </div>
    </div>
  );
};

export default MusicCard;
