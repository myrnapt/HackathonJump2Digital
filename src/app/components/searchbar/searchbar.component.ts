import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  searchKeyword: string = '';
  
  @Output() searchKeywordEvent = new EventEmitter<string>();

  onSearch() {
    if (this.searchKeyword.length >= 2) {
      this.searchKeywordEvent.emit(this.searchKeyword);
    } else {
      this.searchKeywordEvent.emit('')
    }
  }
}
