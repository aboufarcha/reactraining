import { useQuery } from "@tanstack/react-query";
import ArtistCard from "../../../../components/artist/ArtistCard";
import Tag from "../../../../components/tag/Tag";
import { fetchArtists } from "../../../../api/Artists";
import { useEffect } from "react";
import { ArtistContext } from "../../../../contexts/artistContext";

const Artist = () => {
  const {
    data: artistsDTO,
    refetch,
    isLoading,
  } = useQuery({
    queryFn: () => fetchArtists(),
    queryKey: ["artistsDTO"],
  });

  useEffect(() => {
    refetch();
  }, [refetch()]);

  if (artistsDTO === undefined) {
    return <div>Is Loading ...</div>;
  }
  return (
    <div className="w-full space-y-4">
      {/* Tag */}
      <Tag title={"Popular Artist"} link={"/"}></Tag>

      {/* Artist list */}
      <div className="w-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2">
        {artistsDTO?.map((artist) => {
          return (
            <ArtistContext.Provider key={artist.id} value={artist}>
              <ArtistCard></ArtistCard>
            </ArtistContext.Provider>
          );
        })}
      </div>
    </div>
  );
};

export default Artist;
