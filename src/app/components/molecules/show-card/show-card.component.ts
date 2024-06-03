import { Component, Input } from '@angular/core';
import { Show } from '../../../shared/models/show';

@Component({
  selector: 'tv-maze-show-card',
  standalone: true,
  imports: [],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.scss'
})
export class ShowCardComponent {
  @Input() show: Show | undefined;

}
