import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchIconComponent } from '../../icons/search-icon/search-icon.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, SearchIconComponent],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  text: string = '';
  @Output() textChange = new EventEmitter<string>();

  onTextChange() {
    this.textChange.emit(this.text);
  }
}
