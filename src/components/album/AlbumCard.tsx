import { Link } from "react-router-dom";
import PlayBtn from "../playBtn/PlayBtn";
import { useAlbumContext } from "../../contexts/albumContext";

const AlbumCard = ({}) => {
  const album = useAlbumContext();
  return (
    <Link
      to={"/Album-detail"}
      className="w-full px-3 py-2 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer"
    >
      <div className="w-full h-auto relative">
        <img
          src={album.img}
          alt=""
          className="w-full aspect-square object-cover object-center rounded-md"
        />
        {/* Hover image */}
        <PlayBtn></PlayBtn>
      </div>
      <div className="space-y-1">
        <h5 className="text-base font-medium text-neutral-100">
          {album.title}
        </h5>
        <p className="text-sm text-neutral-400">{album.artist}</p>
      </div>
    </Link>
  );
};

export default AlbumCard;
