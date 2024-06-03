import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './shared/services';
import {
  LoaderComponent,
  NoDataComponent,
  SearchComponent,
} from './components/atoms';
import { Show } from './shared/models/show';
import { debounceTime, delay,finalize } from 'rxjs';
import { ShowCardComponent } from './components/molecules/show-card/show-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SearchComponent,
    NoDataComponent,
    LoaderComponent,
    ShowCardComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private tvMazeService: MoviesService = inject(MoviesService);
  public shows: Show[] = [];
  public noData = false;
  public loader = false;

  public filter(value: string) {
    this.noData = false;
    if (value) {
      this.loader = true;
      this.tvMazeService
        .getMovieSearchResults(value)
        .pipe(
          debounceTime(800),
          delay(800),
          finalize(() => (this.loader = false))
        )
        .subscribe((data: Show[]) => {
          this.shows = data;

          if (!this.shows.length) {
            this.noData = true;
          }
        });
    }
  }
}
