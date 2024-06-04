import { Component, inject } from '@angular/core';
import { debounceTime, delay, finalize } from 'rxjs';
import { Show } from '../../../shared/models/show';
import { ShowService } from '../../../shared/services/show.service';
import { LoaderComponent, NoDataComponent, SearchComponent } from '../../atoms';
import { ShowCardComponent } from '../../molecules';

@Component({
  selector: 'tv-maze-show-search-page',
  standalone: true,
  imports: [SearchComponent,LoaderComponent,NoDataComponent,ShowCardComponent],
  templateUrl: './show-search-page.component.html',
  styleUrl: './show-search-page.component.scss'
})
export class ShowSearchPageComponent {

  private tvMazeService: ShowService = inject(ShowService);
  public shows: Show[] = [];
  public noData = false;
  public loader = false;

  public filter(value: string) {
    this.noData = false;
    if (value) {
      this.loader = true;
      this.tvMazeService
        .getShowSearchResults(value)
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
      this.shows = [];
    
  }
}
