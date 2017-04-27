import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './containers/add-todo/add-todo.component';
import { VisibleTodoListComponent } from './containers/visible-todo-list/visible-todo-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterLinkComponent } from './containers/filter-link/filter-link.component';
import { LinkComponent } from './components/link/link.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdCardModule,
  MdButtonModule,
  MdListModule,
  MdInputModule,
  MdIconModule,
  MdCheckboxModule,
  MdLineModule,
} from '@angular/material';

import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { reducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    VisibleTodoListComponent,
    FooterComponent,
    FilterLinkComponent,
    LinkComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    MdIconModule,
    MdCheckboxModule,
    MdLineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
