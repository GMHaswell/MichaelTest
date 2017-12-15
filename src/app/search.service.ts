import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Post } from './post';

@Injectable()
export class SearchService {

  readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  public getPostsByUserId(userId: number): Observable<Post[]> {
  	var url = `${this.API_URL}?userId=${userId}`;

  	return this.http.get<Post[]>(url).pipe(
  	  catchError(this.handleError('getPostsByUserId', []))
  	);
  }

  public getPostById(postId: number): Observable<Post> {
  	var url = `${this.API_URL}/${postId}`;

  	return this.http.get<Post>(url).pipe(
  	  catchError(this.handleError('getPostById', null))
  	);
  }

  public getPosts(): Observable<Post[]> {
  	return this.http.get<Post[]>(this.API_URL).pipe(
  	  catchError(this.handleError('getPosts', []))
  	);
  }

	private handleError<T> (operation = 'operation', result?: T) {
	  return (error: any): Observable<T> => {
	    console.error(error);

	    return of(result as T);
	  };
	}
}
