import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConstructionInstance} from "../model/ConstructionInstance.model";

@Component({
  selector: 'app-forge',
  templateUrl: './forge.component.html',
  styleUrls: ['./forge.component.css']
})
export class ForgeComponent implements OnInit {

  nextRankTavern: any;
  nextRankFarm: any;
  constructionInstance: ConstructionInstance;
  tavern: ConstructionInstance;
  farm: ConstructionInstance;


  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getConstructionInstances();
  }

  getConstructionInstances() { // récupére l'instance de la taverne et du jardin avec son rank
    this.http.get<any>('http://localhost:9000/constructioninstances').subscribe(data => {
      this.farm = data[0];
      this.tavern = data[1];
    });
    this.getConstructionCost();
  }

  getConstructionCost() { // récupére le prochain cout en or d'amélioration de la taverne.
    this.http.get<any>('http://localhost:9000/constructioncosts').subscribe(data => {
      this.nextRankTavern = data.find((rank : any)=> rank.rank === this.tavern.actualRank + 1);
      this.nextRankFarm = data.find((rank : any)=> rank.rank === this.farm.actualRank + 1);
      console.log(this.nextRankFarm);
    })
  }

  updateTavern() { // doit controler si assez d'argent et lancer une update sur l'instance taverne pour la faire monter d'un niveau.
    this.http.put<any>('http://localhost:9000/constructioninstance/nextrank/'+ this.tavern.id, { nextRank: this.nextRankTavern }).subscribe(data => {
      this.getConstructionInstances();
    })
  }

  updateFarm() {
    this.http.put<any>('http://localhost:9000/constructioninstance/nextrank/'+ this.farm.id, { nextRank: this.nextRankFarm }).subscribe(data => {
      this.getConstructionInstances();
    })
  }


}
