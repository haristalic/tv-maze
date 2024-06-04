import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../../../shared/models/show';

@Component({
  selector: 'tv-maze-show-card',
  standalone: true,
  imports: [],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.scss',
})
export class ShowCardComponent {
  @Input() show: Show | undefined;
  @Output() singleShowClicked = new EventEmitter<number>();

  private router:Router = inject(Router);


  public goToDetails(id: number) {
    this.router.navigate(['/show', id]);
  }
}
