import { Component, OnInit } from '@angular/core';
import { StorageService } from '../system/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private storageService: StorageService) {
    this.storageService.getMoviesByCategory('popular', 1);
    this.storageService.getTopRatedMovies();
  }

  ngOnInit(): void {
  }

}
