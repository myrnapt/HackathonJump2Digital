import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchFiltersComponent } from './components/search-filters/search-filters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    SearchbarComponent,
    SearchFiltersComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    InfiniteScrollModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
