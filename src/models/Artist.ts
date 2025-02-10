import { Album } from "@spotify/web-api-ts-sdk";
import { Music } from "./Music";

export interface Artist{
    id:string ;
    name:string ;
    tag:string;
    img:string;
    listeners:string;
    albums?:Album[];
    musics?:Music[] ;
}