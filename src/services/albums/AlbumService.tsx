import { Market, SpotifyApi } from "@spotify/web-api-ts-sdk";

const clientId = "2bbd2d0377b846ddba23d7a53c6c085b";
const redirectUri = "http://localhost:5173/";

const spotifyApi = SpotifyApi.withUserAuthorization(clientId, redirectUri, [
  "user-top-read",
  "playlist-read-private",
]);

export const getNewReleasesInMorocco = async () => {
  try {
    const response = await spotifyApi.browse.getNewReleases("MA");
    const albumIds = response.albums.items.map((album) => album.id);
    return getAlbumsByIds(albumIds, "MA");
  } catch (error) {
    console.error("Error fetching new releases:", error);
    return [];
  }
};

const getAlbumsByIds = async (ids: string[], market: string = "MA") => {
  try {
    if (ids) {
      const albums = await spotifyApi.albums.get(ids, market as Market);
      console.log("Albums : ", albums);
      return albums;
    }
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
};
