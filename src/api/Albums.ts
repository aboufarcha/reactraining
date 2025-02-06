import { Album } from "../models/Album";


const albums = [
    {
        id: "1",
        artist: "Don Bigg",
        title: "Mgharba tal moute",
        img: "https://cdn-images.dzcdn.net/images/cover/1529a3f5e1a943ec990996188aac632e/0x1900-000000-80-0-0.jpg"
    },
    {
        id: "2",
        artist: "Nass El Ghiwane",
        title: "Ah Ya Ouine",
        img: "https://m.media-amazon.com/images/I/61MwqbwnUZL._UXNaN_FMjpg_QL85_.jpg"
    },
    {
        id: "3",
        artist: "Labess",
        title: "Yemma",
        img: "https://static.fnac-static.com/multimedia/Images/FR/NR/d8/b0/d0/13676760/1540-1/tsp20210716112735/Yemma.jpg"
    },
    {
        id: "4",
        artist: "Michael Jackson",
        title: "Thriller",
        img: "https://m.media-amazon.com/images/M/MV5BMDM1YzIyNTYtOGFiMS00YjJiLThiMTktMjllYzI4NjExOGNjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "5",
        artist: "Cheb Khaled",
        title: "Liberté",
        img: "https://static.fnac-static.com/multimedia/FR/Images_Produits/FR/fnac.com/Visual_Principal_340/0/9/7/0600753168790/tsp20121011190219/Liberte.jpg"
    },
    {
        id: "6",
        artist: "Cheb Hasni",
        title: "Tal Adabi",
        img: "https://cdn-images.dzcdn.net/images/cover/04629b180a6449726d684b93ce920fa5/1900x1900-000000-80-0-0.jpg"
    }
];


export const fetchAlbums = async (query = "") : Promise<Album[] > => {

    const filteredAlbums = albums.filter((album)=> 
      album.title.toLowerCase().includes(query.toLocaleLowerCase())
    );

    return [...filteredAlbums];
}