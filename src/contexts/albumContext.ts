import { createContext, useContext } from "react";
import { Album } from "../models/Album";

export const AlbumContext = createContext<Album | undefined>(undefined);


export function useAlbumContext(){
    const album = useContext(AlbumContext);
    if(album === undefined){
        throw new Error("useAlbumContext must be used with AlbumContext");
    }

    return album;
}