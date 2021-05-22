import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TavernComponent} from "./tavern/tavern.component";
import {GardenComponent} from "./garden/garden.component";
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
  console.log("taverne clické");
  const dialogRef = this.dialog.open(TavernComponent, {
    panelClass: 'mat-dialog',
    width: '40%',
    height: '50%'
  })
}

  clickGarden() {
    console.log("Jardin clické");
    const dialogRef = this.dialog.open(GardenComponent, {
      panelClass: 'mat-dialog',
      width: '40%',
      height: '50%'
    })
  }

  clickForge() {
    console.log("Forge clické");
    const dialogRef = this.dialog.open(ForgeComponent, {
      panelClass: 'mat-dialog',
      width: '40%',
      height: '50%'
    })
  }

}
