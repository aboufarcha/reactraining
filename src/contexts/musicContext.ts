import { createContext, useContext, useState } from "react";
import { Music } from "../models/Music";


export const MusicContext = createContext<Music | undefined>(undefined);


export function useMusicContext(){
    const music = useContext(MusicContext);
    if(music === undefined){
        throw new Error("useMusicContext must be used with MusicContext");
    }

    return music;
}

