import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { SearchComponent } from './home/search/search.component';
import { StorageService } from './system/services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieComponent } from './home/movies-list/movie/movie.component';
import { MoviesListComponent } from './home/movies-list/movies-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RecommendedMoviesComponent } from './movie-details/recommended-movies/recommended-movies.component';
import { MovieContentComponent } from './movie-details/movie-content/movie-content.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    SearchComponent,
    MovieComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    RecommendedMoviesComponent,
    MovieContentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "showBackground": false,
      "startFromZero": false
    })],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
