import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { CharacterList } from 'src/app/models/character-list.interface';
import { Character } from 'src/app/models/character.interface';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  // VARIABLES
  @Input() characterList: Character[] = [];
  filteredCharacterList: Character[] = []; 
  receivedKeyword: string = '';
  page: number = 1;
  searchError: boolean = false;
  selectedStatus: string = '';
  selectedGender: string = ''; 
  selectedRace: string = ''; 
  isLoading: boolean = false;

  constructor(private APIservice: APIService) {}
  
  ngOnInit() {
    this.getCharacterList()
  }

  // TRAEMOS LA LISTA DE PERSONAJES
  getCharacterList() {
    this.isLoading = true;
    this.APIservice.getCharacters(this.page)
    .pipe(
      delay(3000)
    )
    .subscribe((data) => {
      this.characterList = data.results;
      this.filteredCharacterList = this.characterList;
      this.isLoading = false;
    })
  }

   // SCROLL INFINITO
   onScroll(){
    if (this.page < 42) {
      this.page++;
      this.APIservice.getCharacters(this.page)
      .subscribe((response: CharacterList) => {
        this.characterList.push(...response.results);
      })
    }
  } 

  // TRAEMOS LA KEYWORD Y LOS FILTROS
  onReceiveSearchKeyword(keyword: string) {
    this.receivedKeyword = keyword;
    this.applyFilters();
  }

  updateStatusFilter(status: string) {
    this.selectedStatus = status;
    this.applyFilters();
  }

  updateGenderFilter(gender: string) {
    this.selectedGender = gender;
    this.applyFilters();
  }

  updateRaceFilter(race: string) {
    this.selectedRace = race;
    this.applyFilters();
  }

  // FILTRAMOS EL RESULTADO
  applyFilters() {
    this.filteredCharacterList = this.characterList
      .filter((character: Character) =>
        character.name.toLowerCase().includes(this.receivedKeyword.toLowerCase()) &&
        (this.selectedStatus === '' || character.status === this.selectedStatus) &&
        (this.selectedGender === '' || character.gender === this.selectedGender) &&
        (this.selectedRace === '' || character.species === this.selectedRace)
      );

    this.searchError = this.filteredCharacterList.length === 0;
  }
 }
