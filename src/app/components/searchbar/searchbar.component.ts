import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Input() searchKeyword: string = '';

  onSearch() {
    this.searchEvent.emit(this.searchKeyword);
  }
}
