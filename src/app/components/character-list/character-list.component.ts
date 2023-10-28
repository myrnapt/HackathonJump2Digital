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
  filteredCharacterList: Character[] = []; 
  receivedKeyword: string = '';

  constructor(private APIservice: APIService) {}
  
  ngOnInit() {
    this.getCharacterList()
  }

  // TRAEMOS LA LISTA DE PERSONAJES
  getCharacterList() {
    this.APIservice.getCharacters()
    .subscribe((data) => {
      this.characterList = data.results;
      this.filteredCharacterList = this.characterList;
    })
  }

   // SCROLL INFINITO
   onScroll(){
    this.APIservice.getCharacters()
      .subscribe((response: CharacterList) => {
        this.characterList.push(...response.results);
      })
  } 

  // TRAEMOS LA KEYWORD Y FILTRAMOS
  onReceiveSearchKeyword(keyword: string) {
    this.receivedKeyword = keyword;
    if (this.receivedKeyword.trim() !== '') {
      this.filteredCharacterList = this.characterList.filter((character: Character) =>
        character.name.toLowerCase().includes(this.receivedKeyword.toLowerCase())
      );
    } else {
      this.filteredCharacterList = this.characterList;
    }
  }

 }
