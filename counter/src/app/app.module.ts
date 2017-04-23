import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MdCardModule, MdButtonModule } from '@angular/material';

import counterReducer from './reducers';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ counter: counterReducer }),
    MdCardModule,
    MdButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
