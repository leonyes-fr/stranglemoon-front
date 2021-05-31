import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "../misc/global.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  title = 'stranglemoon-front';
  userForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private http: HttpClient,
    public globalService: GlobalService,
    private router: Router
  )  {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: 'Username',
      password: 'Password',
      token: '',
      id: ''
    });
  }

  onSubmitForm() {
    let tempCredential = this.userForm.value;
    console.log(tempCredential);

//    let credentials  = Object.values(tempCredentials);
    this.http.post<any>('http://localhost:9000/auth', tempCredential ).subscribe(token => {
      if (token !== null) {
        this.globalService.setToken(token.token);
        this.router.navigate(['/map']);
      }
    })
  }


}
