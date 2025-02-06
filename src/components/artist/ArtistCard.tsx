import { Link, useNavigate } from "react-router-dom";
import PlayBtn from "../playBtn/PlayBtn";
import { useArtistContext } from "../../contexts/artistContext";

const ArtistCard = () => {
  const artist = useArtistContext();

  return (
    <Link
      to={"/artist-detail/" + artist.id}
      className="w-full px-3 py-2 rounded-md bg-transparent hover:bg-neutral-800/15 space-y-3 ease-in-out duration-100 group cursor-pointer"
    >
      <div className="w-full h-auto relative">
        <img
          src={artist.img}
          alt=""
          className="w-full aspect-square object-cover object-center rounded-full"
        />
        {/* Hover image */}
        <PlayBtn></PlayBtn>
      </div>
      <div className="space-y-1">
        <h5 className="text-base font-medium text-neutral-100">
          {artist.name}
        </h5>
        <p className="text-sm text-neutral-400">{artist.tag}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
