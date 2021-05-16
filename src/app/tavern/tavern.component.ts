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
  inventories: any;

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
      this.inventories  = data[0];
      console.log(data);
    })
  }

  sellDrink() {
    console.log('boisson vendue');
    console.log(this.inventories);
    this.http.put<any>('http://localhost:9000/inventories/'+ this.inventories.id, { inventories: this.inventories }).subscribe(data => {
      this.getInventories();
      console.log('operation done');
    })
  }



}
