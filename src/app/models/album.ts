import { Songs } from "./songs";

export class Album {
    id: number;
    name: string;
    artist: string;
    price: number;
    genre: string;
    rating: number;
    date: string;
    description: string;
    img: string;
    songs: Songs[]
}