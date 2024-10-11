import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  text: string = '';
  timeout: ReturnType<typeof setTimeout> | undefined;
  @Output() textChange = new EventEmitter<string>();

  onTextChange() {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.textChange.emit(this.text);
    }, 500);
  }
}
