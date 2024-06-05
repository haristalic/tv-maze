import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../atoms';

@Component({
  selector: 'tv-maze-header',
  standalone: true,
  imports: [RouterModule,SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() showSearch = true;
  @Output() searchEventChange = new EventEmitter<string>();


  public searchValueChanged(value: string):void {
    this.searchEventChange.emit(value);
  }
}
