import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/system/services/storage.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  imgBaseUrl: string;
  posterUrl: string;
  genre: string;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.imgBaseUrl = this.storageService.getImageBaseUrl()
    this.posterUrl = this.imgBaseUrl + 'w154' + this.movie.poster_path;
    this.genre = this.storageService.getGenereById(this.movie.genre_ids[0]).name;
  }

}
