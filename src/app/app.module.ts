import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DinosaursComponent } from './component/dinosaurs/dinosaurs.component';
import { DinosaurComponent } from './component/dinosaur/dinosaur.component';
import { AddDinosaurComponent } from './add-dinosaur/add-dinosaur.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DinosaursComponent,
    DinosaurComponent,
    AddDinosaurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
