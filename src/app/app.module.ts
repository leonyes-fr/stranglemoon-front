import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { TavernComponent } from './tavern/tavern.component'
import {HttpClientModule} from '@angular/common/http';
import { FarmComponent } from './farm/farm.component';
import { ForgeComponent } from './forge/forge.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
