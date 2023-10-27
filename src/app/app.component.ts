import { Component } from '@angular/core';
import { Character } from './models/character.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  characterList: Character[] = [];
  searchKeyword: string = '';

  handleSearch(searchTerm: string) {
    this.searchKeyword = searchTerm;
  }

}
