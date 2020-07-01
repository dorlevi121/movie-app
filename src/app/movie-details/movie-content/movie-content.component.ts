import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StorageService } from 'src/app/system/services/storage.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.scss'],
  animations: [
    trigger('carouselImg', [
      state('0', style({

      })),
      transition('0 <=> 1', [
        animate(1000, keyframes([
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
export class MovieContentComponent implements OnInit, OnChanges {
  @Input() movie;
  backdropImageBaseUrl: string;
  posterUrl: string;
  genre: [];
  rating:number;
  state = '0';

  constructor(private storageService: StorageService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.backdropImageBaseUrl = this.storageService.getBackdropImageBaseUrl() + this.movie.backdrop_path
    this.posterUrl = this.storageService.getImageBaseUrl() + 'w154' + this.movie.poster_path;
    this.genre = this.movie.genres
    this.rating = this.movie.vote_average*10;
    window.scroll(0,0)
    this.state === '0' ? this.state = '1' : this.state = '0';
  }

  ngOnInit() {
  }
}
