import { MdVerified } from "react-icons/md";
import { useArtistContext } from "../../../../contexts/artistContext";

const ArtistInfo = () => {
  const artist = useArtistContext();
  return (
    <div className="w-full h-auto flex items-center flex-wrap gap-x-7 gap-y-6 md:pl-5 pl-4 md:pr-7 sm:pr-5 pr-4">
      <img
        src="https://transversales-verdun.com/wp-content/uploads/2023/12/Labess.jpg"
        alt=""
        className="w-52 aspect-square rounded-full objectif-center objectif-cover shadow-xl"
      />
      <div className="space-y-3">
        <div className="md:flex hidden items-center gap-x-2">
          <MdVerified className="w-7 h-7 text-blue-500"></MdVerified>
          <p className="w-7 h-7 text-neutral-100">Verified</p>
        </div>
        <h1 className="md:text-8xl sm:text-6xl text-4xl font-black text-neutral-50">
          {artist.name}
        </h1>
        <p className="text-base text-neutral-100">
          {artist.listeners} monthly listeners
        </p>
      </div>
    </div>
  );
};

export default ArtistInfo;
