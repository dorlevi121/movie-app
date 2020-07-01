import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/system/services/storage.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  topRatedMovies = [];
  currentMovie = 0;
  backdropImageBaseUrl: string;
  faInfo = faInfoCircle;

  constructor(private storageService: StorageService) {
    this.backdropImageBaseUrl = storageService.getBackdropImageBaseUrl()
  }


  ngOnInit(): void {
    this.storageService.topRatedMoviesList
      .subscribe((movies: []) => {
        this.topRatedMovies = [...movies];
      });

  }

  onClickArrow(direction: 'next' | 'prev') {
    if (direction === 'next')
      this.currentMovie = (this.currentMovie + 1) % this.topRatedMovies.length;
    else if (direction === 'prev') {
      if (this.currentMovie > 0)
        this.currentMovie = (this.currentMovie - 1);
      else
        this.currentMovie = this.topRatedMovies.length - 1;
    }

  }

}
