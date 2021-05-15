import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TavernComponent} from "./tavern/tavern.component";

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
    width: '40%',
    height: '50%'
  })
}

}
