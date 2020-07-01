import { Component, OnInit } from '@angular/core';
import { StorageService } from './system/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';
  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {

  }


}
