import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss'],
  animations: [
    trigger('carouselImg', [
      state('0', style({

      })),
      transition('0 <=> 1', [
        animate(500, keyframes([
          style({
            opacity: 0,
          }),

          style({
            opacity: 1,
          })
        ]))
      ])
    ])
  ]
})
export class RecommendedMoviesComponent implements OnInit, OnChanges {
  @Input() recommendedMovies: [];
  movies: any[] = [];
  currentMovie = 0;
  numberOfMovieTOShow = 5;
  state = '0';

  constructor() {
    this.checkIfMobile();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.movies = [...this.recommendedMovies.slice(0, this.numberOfMovieTOShow)];
  }

  ngOnInit(): void {

  }

  onClickArrow(direction: 'next' | 'prev') {
    if (direction === 'next')
      this.currentMovie = (this.currentMovie + this.numberOfMovieTOShow) % this.recommendedMovies.length;
    else if (direction === 'prev') {
      if (this.currentMovie > this.numberOfMovieTOShow - 1)
        this.currentMovie = (this.currentMovie - this.numberOfMovieTOShow);
      else
        this.currentMovie = this.recommendedMovies.length - this.numberOfMovieTOShow;
    }
    this.movies = [...this.recommendedMovies.slice(this.currentMovie, this.currentMovie + this.numberOfMovieTOShow)];
    this.state === '0' ? this.state = '1' : this.state = '0';
  }

  checkIfMobile() {
    const ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      this.numberOfMovieTOShow = 4;
    }
  }

}
