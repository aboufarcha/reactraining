import { Music } from "./Music";

export interface Album{
    id:string ;
    artist:string ;
    title:string;
    img:string ;
    musics?:Music[]
}