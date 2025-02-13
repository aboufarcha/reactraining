import { Link } from "react-router-dom";
import MusicCard from "../../../../components/music/MusicCard";
import { useArtistContext } from "../../../../contexts/artistContext";
import { MusicContext } from "../../../../contexts/musicContext";

const MusicList = () => {
  const artist = useArtistContext();

  return (
    <div className="w-full space-y-4">
      <h1 className="md:text-xl text-lg text-neutral-50 font-bold">Popular</h1>
      <div className="space-y-0">
        {artist.musics?.map((music) => {
          return (
            <MusicContext.Provider key={music.id} value={music}>
              <MusicCard></MusicCard>
            </MusicContext.Provider>
          );
        })}
      </div>
      <Link
        to={"/"}
        className="px-6 block text-sm text-neutral-400 font-meduim hover:text-neutral-200 cursor-default ease-in-out duration-100"
      >
        See more
      </Link>
    </div>
  );
};

export default MusicList;
