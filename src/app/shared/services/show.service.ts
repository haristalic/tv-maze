import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { catchError, Observable, map } from 'rxjs';
import { Show, ShowInfo } from '../models/show';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private http = inject(HttpClient);

  public getShowSearchResults(search: string): Observable<Show[]> {
    return this.http
      .get<ShowInfo[]>(environment.apiTvMaze + `search/shows?q=${search}`)
      .pipe(
        map((data: ShowInfo[]) => {
          return data.map((show: ShowInfo) => show.show);
        }),
        catchError((error: Error) => {
          throw new Error(error.message);
          // TO DO: add toast service to show error message to user
        })
      );
  }

  public getSingleSearchShow(id: string): Observable<any> {
    return this.http.get<ShowInfo>(environment.apiTvMaze + `shows/${id}`).pipe(
      catchError((error: Error) => {
        throw new Error(error.message);
        // TO DO: add toast service to show error message to user
      })
    );
  }
}
