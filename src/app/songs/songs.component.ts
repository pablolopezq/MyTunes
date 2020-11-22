import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AlbumsService } from '../core/albums.service';
import { SongsDataSource, SongsItem } from './songs-datasource';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<SongsItem>;
  dataSource: SongsDataSource;
  @Input() id: number;
  service : AlbumsService = new AlbumsService();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'artist', 'duration', 'price'];

  ngOnInit() {
    this.dataSource = new SongsDataSource(this.id, this.service);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  toggle(row) {
    this.service.togglePurchaseSong(row.id);
    this.ngOnInit()
    this.ngAfterViewInit()
    alert(`Song ${row.name} was bought`)
  }
}
