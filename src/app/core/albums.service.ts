import { Injectable } from '@angular/core';
import { allAlbums, purchasedAlbums, allSongs, purchasedSongs } from "../mocks/albums";
import { Album } from "../models/album";
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  albums = allAlbums;
  purchased = purchasedAlbums;
  songs = allSongs;
  purchasedSongs = purchasedSongs;

  getAlbums() : Album[] {
    return this.albums;
  }

  getPurchased() : Album[] {
    return this.albums.filter(a => this.purchased.includes(a.id));
  }

  getPurchasedList() : number[] {
    return this.purchased;
  }

  getPurchasedSongs() : number[] {
    return this.purchasedSongs;
  }

  getAlbumById(id : number) : Album {
    return this.albums.find(a => a.id === id)
  }

  getAlbumSongs(id : number) : Song[] {
    return this.songs.filter(s => s.album === id);
  }

  getAlbumDuration(id : number) : number {
    let album_songs = this.songs.filter(s => s.album === id);
    return album_songs.reduce((a,b)=>a+(b['duration']||0), 0)/60
  }

  togglePurchase(id : number){
    const index = this.purchased.indexOf(id);
    if (index > -1) {
      this.purchased.splice(index, 1);
    }
    else {
      this.purchased.push(id);
    }
    console.log("a")
  }

  togglePurchaseSong(id : number) {
    const index = this.purchasedSongs.indexOf(id);
    if (index > -1) {
      this.purchasedSongs.splice(index, 1);
    }
    else {
      this.purchasedSongs.push(id);
    }
  }

  setAlbumRating(id : number, newRating : number){
    const index = this.albums.findIndex(a => a.id === id);
    console.log(this.albums[index].rating)
    this.albums[index].rating = newRating;
    console.log(this.albums[index].rating)
  }
}
