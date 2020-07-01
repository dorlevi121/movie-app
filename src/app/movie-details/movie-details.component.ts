import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StorageService } from '../system/services/storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie;
  recommendedMovies: any [];

  constructor(private route: ActivatedRoute, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.storageService.getMovieById(params['id'])
        .subscribe((movie: any) => {
          console.log(movie);
          this.movie = movie;
          this.storageService.getRecommendationsMovies(params['id']);
        })
    });

    this.storageService.recommendedMoviesList
      .subscribe((movies: any []) => {
        this.recommendedMovies = [...movies];
      })
  }

}
