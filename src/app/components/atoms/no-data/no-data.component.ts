import { Component, Input } from '@angular/core';

@Component({
  selector: 'tv-maze-no-data',
  standalone: true,
  imports: [],
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.scss',
})
export class NoDataComponent {
  @Input() description = 'No shows';
  public imgSrc = 'assets/images/no-data.png';
}
