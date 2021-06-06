import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Inventory} from "../model/Inventory.model";

@Component({
  selector: 'app-tavern',
  templateUrl: './tavern.component.html',
  styleUrls: ['./tavern.component.css']
})
export class TavernComponent implements OnInit {

  gold: number = 0;
  carrot: number = 0;
  inventories: Inventory;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getInventories();
  }

  getInventories() {
    this.http.get<any>('http://localhost:9000/inventories').subscribe(data => {
      this.inventories  = data[0];
    })
  }

  sellDrink() {
    this.http.put<any>('http://localhost:9000/inventories/gold/'+ this.inventories.id, { inventories: this.inventories }).subscribe(data => {
      this.getInventories();
    })
  }


}
