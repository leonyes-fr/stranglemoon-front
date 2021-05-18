import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConstructionInstance} from "../model/ConstructionInstance.model";

@Component({
  selector: 'app-forge',
  templateUrl: './forge.component.html',
  styleUrls: ['./forge.component.css']
})
export class ForgeComponent implements OnInit {

  nextRank: any;
  constructionInstance: ConstructionInstance;


  constructor(
    private http: HttpClient
  ) {
    this.constructionInstance = new ConstructionInstance();
  }

  ngOnInit(): void {
    this.getConstructionInstances();

  }

  getConstructionInstances() { // récupére l'instance de la taverne
    this.http.get<any>('http://localhost:9000/constructioninstances').subscribe(data => {
    this.constructionInstance = data[0];
    });
    this.getConstructionCost();
  }

  getConstructionCost() { // récupére le prochain cout en or d'amélioration de la taverne.
    this.http.get<any>('http://localhost:9000/constructioncosts').subscribe(data => {
      this.nextRank = data.find((rank : any)=> rank.rank === this.constructionInstance.actualRank + 1);
    })
  }

  updateTavern() { // doit controler si assez d'argent et lancer une update sur l'instance taverne pour la faire monter d'un niveau.
    this.http.put<any>('http://localhost:9000/constructioninstance/nextrank/'+ this.constructionInstance.id, { nextRank: this.nextRank }).subscribe(data => {
      this.getConstructionInstances();
    })
  }


}
