import { useParams } from "react-router-dom";
import Player from "../../../components/player/Player";
import Sidebar from "../../main/sidebar/Sidebar";
import ArtistLayout from "./ArtistLayout";
import {
  ArtistContext,
  useArtistContext,
} from "../../../contexts/artistContext";
import { useQuery } from "@tanstack/react-query";
import { fetchAlbums } from "../../../api/Albums";
import { useEffect } from "react";
import { fetchArtists } from "../../../api/Artists";

const ArtistDetail = () => {
  const { id } = useParams();
  const {
    data: artistDTO,
    refetch,
    isLoading,
  } = useQuery({
    queryFn: () => fetchArtists(id),
    queryKey: ["artistDTO"],
  });

  useEffect(() => {
    refetch();
  }, [artistDTO]);
  if (!artistDTO) return <></>;
  return (
    <div className="w-full flex-1 flex gap-x-2 relative">
      <Sidebar></Sidebar>
      <ArtistContext.Provider value={artistDTO[0]}>
        <ArtistLayout></ArtistLayout>
      </ArtistContext.Provider>

      <Player></Player>
    </div>
  );
};

export default ArtistDetail;
