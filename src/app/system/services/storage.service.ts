
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StorageService {
  private genres: [];
  private apiKey = '?api_key=c0937317658b907ecf6079fad0c66d0c';
  private apiUrl = 'https://api.themoviedb.org/';
  private imageBaseurl = 'https://image.tmdb.org/t/p/';

  popularMoviesList: Subject<[]> = new Subject<[]>();
  searchMoviesList: Subject<[]> = new Subject<[]>();
  topRatedMoviesList: Subject<[]> = new Subject<[]>();
  recommendedMoviesList: Subject<[]> = new Subject<[]>();


  constructor(private http: HttpClient) {
    this.http.get(this.apiUrl + '3/genre/movie/list' + this.apiKey)
      .subscribe((genres) => {
        this.genres = genres['genres'];
      });
  }

  getMoviesByCategory(category: string = 'popular', page: number = 1) {
    this.http.get(this.apiUrl + '3/movie/' + category + this.apiKey + '&page=' + page)
      .subscribe((movies) => {
        this.popularMoviesList.next(movies['results']);
      });
  }

  getMovieById(id: string) {
    return this.http.get(this.apiUrl + '3/movie/' + id + this.apiKey);
  }

  getTopRatedMovies() {
    this.http.get(this.apiUrl + '3/movie/' + 'top_rated' + this.apiKey)
      .subscribe((movies) => {
        this.topRatedMoviesList.next(movies['results']);
      });
  }

  getRecommendationsMovies(movieId) {
    this.http.get(this.apiUrl + '3/movie/' + movieId + '/recommendations' + this.apiKey)
      .subscribe((movies) => {
        this.recommendedMoviesList.next(movies['results']);
      });
  }

  getBackdropImageBaseUrl() {
    return this.imageBaseurl + '/original/';
  }

  getImageBaseUrl() {
    return this.imageBaseurl;
  }

  getGenereById(genreId: number): { id: number, name: string } {
    return this.genres.find((g: any) => g.id === genreId);
  }

  search(query) {
    this.http.get(this.apiUrl + '3/search/movie' + this.apiKey + '&language=en-US&query=' + query + '&page=1&include_adult=false')
      .subscribe((movies) => {
        this.searchMoviesList.next(movies['results']);
      });
  }

}
