import { createContext, useContext, useState } from "react";
import { Artist } from "../models/Artist";


export const ArtistContext = createContext<Artist | undefined>(undefined);


export function useArtistContext(){
    const artist = useContext(ArtistContext);
    if(artist === undefined){
        throw new Error("useArtistContext must be used with ArtistContext");
    }

    return artist;
}

