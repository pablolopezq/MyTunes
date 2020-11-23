import { Album } from "../models/album";
import { Song } from '../models/song';

export const allAlbums : Array<Album> = [
    { id: 1, name: "Drones", artist: "Muse", price: 200, genre: "Rock", rating: 3, date: "01/01/2020", description: "Rock album by Muse", img: "assets/drones.jpg" },
    { id: 2, name: "Expectativas", artist: "Bunbury", price: 200, genre: "Rock en espanol", rating: 3, date: "01/01/2020", description: "Rock album by Bunbury", img: "assets/expectativas.jpg" },
    { id: 3, name: "Alienigenas de Todo un Siglo", artist: "Tux Lunan", price: 200, genre: "Rock en espanol", rating: 3, date: "01/01/2020", description: "Rock album by Tux Lunan", img: "assets/alien.jpg" },
    { id: 4, name: "OPUS", artist: "Marc Anthony", price: 200, genre: "Salsa", rating: 3, date: "01/01/2020", description: "Salsa album by Marc Anthony", img: "assets/opus.jpg" },
    { id: 5, name: "Humbug", artist: "Arctic Monkeys", price: 200, genre: "Alt Rock", rating: 3, date: "01/01/2020", description: "Rock album by Arctic Monkeys", img: "assets/humbug.jpg" },
    { id: 6, name: "Contrareloj", artist: "Enanitos Verdes", price: 200, genre: "Rock en espanol", rating: 3, date: "01/01/2020", description: "Rock album by Enanitos Verdes", img: "assets/contrareloj.jpg" },
]

export const allSongs : Array<Song> = [
    {id: 1, name: "The Handler", artist: "Muse", price: 50, duration: 180, rating: 3, album: 1},
    {id: 2, name: "Mercy", artist: "Muse", price: 50, duration: 180, rating: 3, album: 1},
    {id: 3, name: "Psycho", artist: "Muse", price: 50, duration: 180, rating: 3, album: 1},
    {id: 4, name: "Parecemos Tontos", artist: "Bunbury", price: 50, duration: 180, rating: 3, album: 2},
    {id: 5, name: "La Actitud Correcta", artist: "Bunbury", price: 50, duration: 180, rating: 3, album: 2},
    {id: 6, name: "Lugares comunes, frases hechas", artist: "Bunbury", price: 50, duration: 180, rating: 3, album: 2},
    {id: 7, name: "Mal", artist: "Tux Lunan", price: 50, duration: 180, rating: 3, album: 3},
    {id: 8, name: "Fantasmas", artist: "Tux Lunan", price: 50, duration: 180, rating: 3, album: 3},
    {id: 9, name: "Amanecer", artist: "Tux Lunan", price: 50, duration: 180, rating: 3, album: 3},
    {id: 10, name: "Parecen Viernes", artist: "Marc Anthony", price: 50, duration: 180, rating: 3, album: 4},
    {id: 11, name: "Usame", artist: "Marc Anthony", price: 50, duration: 180, rating: 3, album: 4},
    {id: 12, name: "Tu Vida en la Mia", artist: "Marc Anthony", price: 50, duration: 180, rating: 3, album: 4},
    {id: 13, name: "My Propeller", artist: "Arctic Monkeys", price: 50, duration: 180, rating: 3, album: 5},
    {id: 14, name: "Crying Lightning", artist: "Arctic Monkeys", price: 50, duration: 180, rating: 3, album: 5},
    {id: 15, name: "Cornerstone", artist: "Arctic Monkeys", price: 50, duration: 180, rating: 3, album: 5},
    {id: 16, name: "La Muralla Verde", artist: "Enanitos Verdes", price: 50, duration: 180, rating: 3, album: 6},
    {id: 17, name: "Tus Viejas Cartas", artist: "Enanitos Verdes", price: 50, duration: 180, rating: 3, album: 6},
    {id: 18, name: "Luchas de Poder", artist: "Enanitos Verdes", price: 50, duration: 180, rating: 3, album: 6}
]

export const purchasedAlbums : Array<number> = [1,3]

export const purchasedSongs : Array<number> = []