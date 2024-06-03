import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MoviesService } from './shared/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private tvMazeService: MoviesService = inject(MoviesService);

  ngOnInit() {
    this.tvMazeService.getSingleSearchShow('12').subscribe(
      data => {console.log(data)}
    );
    this.tvMazeService.getMovieSearchResults('bad').subscribe(
      data => {console.log(data)}
    )
  }
}

