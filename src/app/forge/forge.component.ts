import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-forge',
  templateUrl: './forge.component.html',
  styleUrls: ['./forge.component.css']
})
export class ForgeComponent implements OnInit {

  actualRank: number = 0;
  nextRank: any;
  name: String = '';
  constructionInstance: any ;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getConstructionInstances();

  }

  getConstructionInstances() {
    this.http.get<any>('http://localhost:9000/constructioninstances').subscribe(data => {
    this.actualRank = data[0].actualRank;
    this.name = data[0].name;
    this.constructionInstance = data[0];
    })
    this.getConstructionCost();
  }

  getConstructionCost() {
    this.http.get<any>('http://localhost:9000/constructioncosts').subscribe(data => {
      this.nextRank = data.find((rank : any)=> rank.rank === this.actualRank + 1);
    })
  }

  updateTavern() {
    this.http.put<any>('http://localhost:9000/constructioninstance/nextrank/'+ this.constructionInstance.id, { nextRank: this.nextRank }).subscribe(data => {
      this.getConstructionInstances();
      console.log('operation done');
    })
  }


}
