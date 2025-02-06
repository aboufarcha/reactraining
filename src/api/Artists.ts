import { Artist } from "../models/Artist";


const artists = [
    {
        id: "1",
        name: "Labess",
        tag: "Artist",
        listeners:"40,373,319",
        img: "https://transversales-verdun.com/wp-content/uploads/2023/12/Labess.jpg",
        musics:[
            {
                id:"1",
                artistId:"1",
                title:"Ya Denya",
                img:"https://i1.sndcdn.com/artworks-000228763017-yj34kc-t500x500.jpg",
                views:"200,000,000"
            },
            {
                id:"2",
                artistId:"1",
                title:"El Kass Ydour",
                img:"https://i1.sndcdn.com/artworks-000228763017-yj34kc-t500x500.jpg",
                views:"200,000,000"
            }

        ]
    },
    {
        id: "2",
        name: "Hamid El Kassri",
        tag: "Artist",
        listeners:"50,373,319",
        img: "https://lobservateur.info/uploads/imported_images/uploads/2018/09/Maalem-Hamid-El-Kasri.jpg"
    },
    {
        id: "3",
        name: "Pause",
        tag: "Artist",
        listeners:"240,373,319",
        img: "https://i.scdn.co/image/ab67616d0000b273b42e91ef7ee2853d252c493"
    },
    {
        id: "4",
        name: "Nass El Ghiwane",
        tag: "Artist",
        listeners:"70,373,319",
        img: "https://i.scdn.co/image/ab67616d0000b273573336a23772c6e522afb060"
    },
    {
        id: "5",
        name: "Mohammed Rouicha",
        tag: "Artist",
        listeners:"220,000,000",
        img: "https://i.scdn.co/image/ab67616d0000b2733d7f49775aed9d5beee0a559"
    }
];


export const fetchArtists = async (query = "") : Promise<Artist[] > => {
    console.log("Query : ",query)
    const filteredArtists = artists.filter((artist)=> 
        artist.id.includes(query)
    );

    console.log("filteredArtists : ",filteredArtists);

    return [...filteredArtists];
}