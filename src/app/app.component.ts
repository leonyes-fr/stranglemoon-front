import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TavernComponent} from "./tavern/tavern.component";
import {FarmComponent} from "./farm/farm.component";
import {ForgeComponent} from "./forge/forge.component";
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "./misc/global.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stranglemoon-front';

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    public globalService: GlobalService
  )  {

  }

  ngOnInit() {
    this.OnLaunch();
  }


  OnLaunch() {
    this.http.get<any>('http://localhost:9000/auth').subscribe(token => {
      this.globalService.setToken(token);
    })
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
