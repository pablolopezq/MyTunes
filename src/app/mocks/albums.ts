import { Album } from "../models/album";

export const allAlbums : Array<Album> = [
    { id: 1, name: "Drones", artist: "Muse", price: 200, genre: "Rock", rating: 3, date: "01/01/2020", description: "Rock album by Muse", img: "assets/drones.jpg", songs: [{id: 1, name: "Song", artist: "Muse", price: 50, rating: 3, duration: 180}] },
    { id: 2, name: "Expectativas", artist: "Bunbury", price: 200, genre: "Rock en espanol", rating: 3, date: "01/01/2020", description: "Rock album by Bunbury", img: "assets/drones.jpg", songs: [{id: 1, name: "Song", artist: "Bunbury", price: 50, rating: 3, duration: 180}] },
    { id: 3, name: "Alienigenas de Todo un Siglo", artist: "Tux Lunan", price: 200, genre: "Rock en espanol", rating: 3, date: "01/01/2020", description: "Rock album by Tux Lunan", img: "assets/alien.jpg", songs: [{id: 1, name: "Song", artist: "Tux Lunan", price: 50, rating: 3, duration: 180}] },
    { id: 4, name: "OPUS", artist: "Marc Anthony", price: 200, genre: "Salsa", rating: 3, date: "01/01/2020", description: "Salsa album by Marc Anthony", img: "assets/drones.jpg", songs: [{id: 1, name: "Song", artist: "Marc Anthony", price: 50, rating: 3, duration: 180}] },
    { id: 5, name: "Humbug", artist: "Arctic Monkeys", price: 200, genre: "Alt Rock", rating: 3, date: "01/01/2020", description: "Rock album by Arctic Monkeys", img: "assets/drones.jpg", songs: [{id: 1, name: "Song", artist: "Arctic Monkeys", price: 50, rating: 3, duration: 180}] },
    { id: 6, name: "Contrareloj", artist: "Enanitos Verdes", price: 200, genre: "Rock en espanol", rating: 3, date: "01/01/2020", description: "Rock album by Enanitos Verdes", img: "assets/contrareloj.jpg", songs: [{id: 1, name: "Song", artist: "Enanitos Verdes", price: 50, rating: 3, duration: 180}] },
]

export const purchasedAlbums : Array<number> = [1,3,6]