import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from 'src/app/system/services/storage.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  moviesList = [];
  page = 1;
  loading = false;
  searchMode = false

  constructor(private storageService: StorageService) { }


  ngOnInit(): void {
    this.storageService.popularMoviesList
      .subscribe((movies) => {
        if (this.searchMode) {
          this.moviesList = movies.slice();
          this.searchMode = false;
        }
        else
          this.moviesList = this.moviesList.concat(movies.slice());
        this.loading = false;
      });

    this.storageService.searchMoviesList
      .subscribe((movies) => {
        this.moviesList = movies.slice();
        this.searchMode = true;
        this.loading = false;
      })
  }

  loadMoreMovies() {
    this.storageService.getMoviesByCategory('popular', this.page + 1);
    this.page++;
  }

  onScroll() {
    if (this.page > 1) {
      this.loading = true;
      this.loadMoreMovies();
    }
  }

}
