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
import { MapComponent } from './map/map.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { PondComponent } from './pond/pond.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import {MatTabsModule} from "@angular/material/tabs";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'map', component: MapComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TavernComponent,
    FarmComponent,
    ForgeComponent,
    MapComponent,
    LoginComponent,
    PondComponent,
    LaboratoryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatDialogModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
