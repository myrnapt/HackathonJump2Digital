import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent {


// ENVIAMOS LOS FILTROS AL PADRE
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

  // RESETEAMOS LOS FILTROS Y LOS BOTONES
  deselectAllFilters() {
    this.statusFilterEvent.emit('');
    this.genderFilterEvent.emit('');
    this.speciesFilterEvent.emit('');
    this.deselectRadioButtons('input[name="options-status"]');
    this.deselectRadioButtons('input[name="options-gender"]');
    this.deselectRadioButtons('input[name="options"]');
  }

  deselectRadioButtons(selector: string) {
    const radioButtons = document.querySelectorAll(selector) as NodeListOf<HTMLInputElement>;
    radioButtons.forEach((radio: HTMLInputElement) => {
      radio.checked = false;
    });
  }

}
