import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Show } from '../../../shared/models';

@Component({
  selector: 'tv-maze-single-show',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './single-show.component.html',
  styleUrl: './single-show.component.scss'
})
export class SingleShowComponent {
  @Input() showDetails: Show | undefined;;
}
