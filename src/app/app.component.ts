import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "./misc/global.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stranglemoon-front';
  userForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private http: HttpClient,
    public globalService: GlobalService
  )  {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: 'Username',
      password: 'Password',
    });
  }

  onSubmitForm() {
    let tempCredentials = this.userForm.value;
    let credentials  = Object.values(tempCredentials);
    this.http.post<any>('http://localhost:9000/auth', credentials ).subscribe(token => {
      this.globalService.setToken(token.token);
    })
  }


}
