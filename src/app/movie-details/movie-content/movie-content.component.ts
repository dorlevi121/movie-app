import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StorageService } from 'src/app/system/services/storage.service';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.scss']
})
export class MovieContentComponent implements OnInit, OnChanges {
  @Input() movie;
  backdropImageBaseUrl: string;
  posterUrl: string;
  genre: [];
  rating:number;
  constructor(private storageService: StorageService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.backdropImageBaseUrl = this.storageService.getBackdropImageBaseUrl() + this.movie.backdrop_path
    this.posterUrl = this.storageService.getImageBaseUrl() + 'w154' + this.movie.poster_path;
    this.genre = this.movie.genres
    this.rating = this.movie.vote_average*10;
    window.scroll(0,0)
  }

  ngOnInit() {
  }
}
