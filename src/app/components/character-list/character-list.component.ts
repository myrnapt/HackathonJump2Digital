import { Component, Input, OnInit } from '@angular/core';
import { CharacterList } from 'src/app/models/character-list.interface';
import { Character } from 'src/app/models/character.interface';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  @Input() characterList: Character[] = [];
  
  page: number = 1;

  constructor(private APIservice: APIService) {}

  ngOnInit() {
    this.getCharacterList()
  }

  // TRAEMOS LA LISTA DE PERSONAJES
  getCharacterList() {
    if ( this.page === 42 ) {
      return
    }
    this.APIservice.getCharacters(this.page)
    .subscribe((data) => {
      this.characterList = data.results;
      console.log(this.characterList);
    })
  }

   // SCROLL INFINITO
   onScroll(){
    if (this.page === 42) {
      return;
    }
    this.APIservice.getCharacters(++this.page)
      .subscribe((response: CharacterList) => {
        this.characterList.push(...response.results);
      })
  } 
 }
