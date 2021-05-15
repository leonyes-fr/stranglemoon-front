import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tavern',
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.css']
})
export class TavernComponent implements OnInit {

  gold: number = 0;
  carrot: number = 0;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.getInventories();

  }

  getInventories() {

    this.http.get<any>('http://localhost:9000/inventories').subscribe(data => {
      this.gold = data[0].gold;
      this.carrot  = data[0].carrot;
      console.log(data);
    })


  }

}
