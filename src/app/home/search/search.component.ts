import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/system/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;

  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    const query = event.target.value;
    if (/^[A-Za-z]+$/.test(query) && query)
      this.storageService.search(query);
    else
      this.storageService.getMoviesByCategory();
  }

}
