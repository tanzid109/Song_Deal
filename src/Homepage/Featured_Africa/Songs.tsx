import SongCard, { SongItem } from "@/Shared/Song_Card";


const songs: SongItem[] = [
    {
        id: 1,
        title: "Midnight Drive",
        artist: "Lyla & The Cosmic Wave",
        price: "$25.00",
        genre: "Indie Pop",
        tag: "Trending",
        coverImage: "/assets/song.jpg"
    },
    {
        id: 2,
        title: "Echoes of Neon",
        artist: "DJ Velocity",
        price: "$45.00",
        genre: "EDM",
        tag: "Club Hit",
        coverImage: "/assets/song.jpg"
    },
    {
        id: 3,
        title: "Echoes of Neon",
        artist: "DJ Velocity",
        price: "$45.00",
        genre: "EDM",
        tag: "Club Hit",
        coverImage: "/assets/song.jpg"
    },
    {
        id: 4,
        title: "Echoes of Neon",
        artist: "DJ Velocity",
        price: "$45.00",
        genre: "EDM",
        tag: "Club Hit",
        coverImage: "/assets/song.jpg"
    },
];

export default function FeaturedAfricaSongs() {
    return <SongCard songs={songs} />;
}
