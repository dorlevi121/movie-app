import { Component, OnInit } from '@angular/core';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faVideo = faVideo;

  constructor() { }

  ngOnInit(): void {
  }

}
