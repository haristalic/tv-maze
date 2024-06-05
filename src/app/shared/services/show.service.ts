import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { catchError, Observable, map } from 'rxjs';
import { Show, ShowInfo } from '../models/show';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  private http = inject(HttpClient);
  private toast = inject(ToastrService);

  public getShowSearchResults(search: string): Observable<Show[]> {
    return this.http
      .get<ShowInfo[]>(environment.apiTvMaze + `search/shows?q=${search}`)
      .pipe(
        map((data: ShowInfo[]) => {
          return data.map((show: ShowInfo) => show.show);
        }),
        catchError((error: Error) => {
          this.toast.error(error.message, 'Error occurred', {
            timeOut: 5000,
          });
         
          throw new Error(error.message);

          // TEST: open the DevTools, click Command + Shift + P to
          //  open the command palette and execute
          //  the "Go offline" command to switch
          //  the browser to offline mode
        })
      );
  }

  public getSingleSearchShow(id: string): Observable<any> {
    return this.http.get<ShowInfo>(environment.apiTvMaze + `shows/${id}`).pipe(
      catchError((error: Error) => {
        this.toast.error(error.message, 'Error occurred', {
          timeOut: 5000,
        });
      
        throw new Error(error.message);
       
        // TEST: open the DevTools, click Command + Shift + P to
        //  open the command palette and execute
        //  the "Go offline" command to switch
        //  the browser to offline mode
      })
    );
  }
}
