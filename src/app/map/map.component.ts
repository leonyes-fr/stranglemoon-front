import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TavernComponent} from "../tavern/tavern.component";
import {FarmComponent} from "../farm/farm.component";
import {ForgeComponent} from "../forge/forge.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  title = 'stranglemoon-front';

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
  )  {

  }

  ngOnInit() {
  }

  clickTavern() {
    const dialogRef = this.dialog.open(TavernComponent, {
      panelClass: 'mat-dialog',
      width: '40%',
      height: '50%'
    })
  }

  clickFarm() {
    const dialogRef = this.dialog.open(FarmComponent, {
      panelClass: 'mat-dialog',
      width: '40%',
      height: '50%'
    })
  }

  clickForge() {
    const dialogRef = this.dialog.open(ForgeComponent, {
      panelClass: 'mat-dialog',
      width: '40%',
      height: '50%'
    })
  }

}
