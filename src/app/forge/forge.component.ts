import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-forge',
  templateUrl: './forge.component.html',
  styleUrls: ['./forge.component.css']
})
export class ForgeComponent implements OnInit {

  actualRank: number = 0;
  name: String = '';


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

      console.log(data);
    })
  }


}
