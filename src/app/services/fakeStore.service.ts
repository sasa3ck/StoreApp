import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
import { fakeStoreApi, jsonplaceholder } from '../components/models/list';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class FakeStores {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  fakeProduct: fakeStoreApi[] = [];

  getFakeStore(): Observable<fakeStoreApi[]> {
    return this.http
      .get<fakeStoreApi[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 18),
      })
      .pipe(
        delay(1000),
        retry(3),
        catchError(this.errorHandler.bind(this)),
        tap((p) => (this.fakeProduct = p))
      );
  }

  createFakeProduct(product: fakeStoreApi): Observable<fakeStoreApi> {
    return this.http
      .post<fakeStoreApi>('https://fakestoreapi.com/products', product)
      .pipe(
        tap((p) => {
          this.fakeProduct.push(p);
          console.log(this.fakeProduct);
        })
      );
  }

  getJsonStore(): Observable<jsonplaceholder[]> {
    return this.http
      .get<jsonplaceholder[]>('https://jsonplaceholder.typicode.com/comments', {
        params: new HttpParams({
          // fromString: '_limit=3',
          fromObject: { _limit: 19 },
        }),
      })
      .pipe(delay(500), retry(3), catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
