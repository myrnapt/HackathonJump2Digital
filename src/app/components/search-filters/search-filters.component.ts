import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {

  @Output() statusFilterEvent = new EventEmitter<string>();
  @Output() genderFilterEvent = new EventEmitter<string>();
  @Output() speciesFilterEvent = new EventEmitter<string>();
  @Output() deselectAllFiltersEvent = new EventEmitter<string>();


  statusFilter(status: string) {
    this.statusFilterEvent.emit(status);
  }

  genderFilter(gender: string) {
    this.genderFilterEvent.emit(gender);
  }

  speciesFilter(species: string) {
    this.speciesFilterEvent.emit(species);
  }

  deselectAllFilters() {
    this.statusFilterEvent.emit('');
    this.genderFilterEvent.emit('');
    this.speciesFilterEvent.emit('');
  }
  

}
