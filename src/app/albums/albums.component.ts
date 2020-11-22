import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AlbumsDataSource, AlbumsItem } from './albums-datasource';
import { AlbumsService } from "../core/albums.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<AlbumsItem>;
  dataSource: AlbumsDataSource;
  service : AlbumsService = new AlbumsService();

  constructor(public router: Router){}

  displayedColumns = ['id', 'name', 'artist', 'price'];

  ngOnInit() {
    this.dataSource = new AlbumsDataSource(this.service);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  toggle(row) {
    this.service.togglePurchase(row.id);
    this.ngOnInit()
    this.ngAfterViewInit()
    alert(`Album ${row.name} was bought`)
  }

  selectDetail(row){
    this.router.navigate([`albums/${row.id}`])
  }
}
