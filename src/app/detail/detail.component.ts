import { AfterViewInit, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AlbumsService } from "../core/albums.service";
import { Album } from "../models/album";
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { Song } from '../models/song';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Imagen y rating', cols: 1, rows: 3, },
          { title: 'Descripcion', cols: 3, rows: 1 },
          { title: 'Canciones', cols: 3, rows: 2 },
        ];
      }

      return [
        { title: 'Imagen y rating', cols: 1, rows: 3 },
        { title: 'Descripcion', cols: 3, rows: 1 },
        { title: 'Canciones', cols: 3, rows: 2 },
      ];
    })
  );

  service : AlbumsService;
  album : Album;
  songs: Song[];
  isBought: boolean;

  constructor(private breakpointObserver: BreakpointObserver, service : AlbumsService, private route : ActivatedRoute) {
    this.service = service;
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.album = this.service.getAlbumById(id)
    this.songs = this.service.getAlbumSongs(id);
    this.isBought = this.service.getPurchasedList().includes(id)
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.service.setAlbumRating(this.album.id, $event.newValue)
    this.ngOnInit()
  }

  toggle() {
    this.service.togglePurchase(this.album.id);
    this.ngOnInit()
    alert(`Album ${this.album.name} was bought`)
  }
}
