import { Injectable } from '@angular/core';
import { allAlbums, purchasedAlbums } from "../mocks/albums";
import { Album } from "../models/album";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  albums = allAlbums;
  purchased = purchasedAlbums;

  getAlbums() : Album[] {
    return this.albums;
  }

  getPurchased() : Album[] {
    return this.albums.filter(a => this.purchased.includes(a.id));
  }

  getPurchasedList() : number[] {
    return this.purchased;
  }

  getAlbumById(id : number) {
    return this.albums.find(a => a.id === id)
  }

  togglePurchase(id : number){
    const index = this.purchased.indexOf(id);
    if (index > -1) {
      this.purchased.splice(index, 1);
    }
    else {
      this.purchased.push(id);
    }
  }
}
