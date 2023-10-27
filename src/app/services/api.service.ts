import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharacterList } from '../models/character-list.interface';

@Injectable({
  providedIn: 'root'
})
export class APIService {


  constructor(private apiService: HttpClient) { }

  getCharacters(page: number): Observable<CharacterList> {
    console.log('prueba');
    return this.apiService.get<CharacterList>('https://rickandmortyapi.com/api/character?page=' + page);
  }

  
}
