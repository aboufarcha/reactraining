import { Music } from "../models/Music";


const musics = [
    {
        id:"1",
        artistId:"1",
        title:"Ya Denya",
        img:"https://i1.sndcdn.com/artworks-000228763017-yj34kc-t500x500.jpg",
        views:"200,000,000",
        duration:"4:50"
    },
    {
        id:"2",
        artistId:"1",
        title:"El Kass Ydour",
        img:"https://i1.sndcdn.com/artworks-000228763017-yj34kc-t500x500.jpg",
        views:"200,000,000",
        duration:"4:50"
    }
];


export const fetchMusics = async (query = "") : Promise<Music[] > => {

    const filteredMusics = musics.filter((music)=> 
        music.title.toLowerCase().includes(query.toLocaleLowerCase())
    );

    return [...filteredMusics];
}