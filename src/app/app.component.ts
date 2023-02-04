import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { concat, forkJoin, map, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ver-15';

  /**
   *
   */
  constructor(private http: HttpClient) { }


  getAll<T>(url: string, size: number = 500, filters?: any): Observable<T[]> {
    return this.getAllpriv(url, size, filters ?? {}, 0, [])
  }

  private getAllpriv<T>(url: string, size: number = 500, filters?: any, page: number = 0, content: T[] = []): Observable<T[]> {

    const params = new HttpParams()
    return this.http.get(url, { params }).pipe(
      switchMap((res: any) => {
        if (res.page.number <= res.page.totalPages) {
          return this.getAllpriv(url, size, filters, res.page.number, res.content)
        } else {
          return concat(of(content, res.content))
        }
      }))
  }


  private getAllParallel<T>(url: string, size: number = 500, filters?: any, page: number = 0, content: T[] = []): Observable<T[]> {

    const params = new HttpParams()
    return this.http.get(url, { params }).pipe(
      switchMap((res: any) => {
        if (res.page.number <= res.page.totalPages) {
          const requests$: Observable<any>[] = []

          for (let i = res.page.number; i < res.page.totalPages; i++) {
            requests$.push(this.http.get(url))
          }

          return concat(res.content, forkJoin(requests$).pipe(map((res: any) => res.content)))
          
        } else {
          return concat(of(content, res.content))
        }
      }))
  }
}
