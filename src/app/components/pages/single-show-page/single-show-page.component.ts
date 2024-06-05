import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '../../../shared/models';
import { ShowService } from '../../../shared/services/show.service';
import { HeaderComponent,SingleShowComponent } from '../../molecules';

@Component({
  selector: 'tv-maze-single-show-page',
  standalone: true,
  imports: [DatePipe, SingleShowComponent,HeaderComponent],
  templateUrl: './single-show-page.component.html',
  styleUrl: './single-show-page.component.scss',
})
export class SingleShowPageComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private tvMazeService: ShowService = inject(ShowService);

  public id: string | undefined;
  public details!: Show;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.tvMazeService
      .getSingleSearchShow(this.id.toString())
      .subscribe((data: Show) => (this.details = data));
  }
}
