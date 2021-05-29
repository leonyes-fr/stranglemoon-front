import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { TavernComponent } from './tavern/tavern.component'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FarmComponent } from './farm/farm.component';
import { ForgeComponent } from './forge/forge.component';
import {AuthInterceptor} from "./auth/auth.interceptor";
import {GlobalService} from "./misc/global.service";

@NgModule({
  declarations: [
    AppComponent,
    TavernComponent,
    FarmComponent,
    ForgeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
