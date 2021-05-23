import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TavernComponent} from "./tavern/tavern.component";
import {FarmComponent} from "./farm/farm.component";
import {ForgeComponent} from "./forge/forge.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stranglemoon-front';

  constructor(
    public dialog: MatDialog
  )  {

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
