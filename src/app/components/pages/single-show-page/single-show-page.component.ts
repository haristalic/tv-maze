import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowService } from '../../../shared/services';

@Component({
  selector: 'tv-maze-single-show-page',
  standalone: true,
  imports: [],
  templateUrl: './single-show-page.component.html',
  styleUrl: './single-show-page.component.scss'
})
export class SingleShowPageComponent implements OnInit  {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private tvMazeService: ShowService = inject(ShowService);

  public id:number | undefined;

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.tvMazeService.getSingleSearchShow(this.id.toString()).subscribe(
      (      data: any) => console.log(data)
    );
    console.log(this.id);
  }
}
