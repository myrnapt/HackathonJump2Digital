import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {

  @Output() statusFilterEvent = new EventEmitter<string>();

  statusFilter(status: string) {
    this.statusFilterEvent.emit(status);
  }

  genderFilter(event: any) {
    console.log('prueba2', event.target.value);
  }

  speciesFilter(event: any) {
    console.log('prueba3', event.target.value);
  }

}
