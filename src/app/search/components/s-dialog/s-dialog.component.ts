import { Component, OnInit, ChangeDetectionStrategy,NgZone } from '@angular/core';
import { Store, State } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { MovieListService } from '../../../core/movie/movie-list.service';
import { HomeService } from '../../../home/services/home.service';
import { SegregateMovieService } from '../../services/segregate-movie.service';
import { SearchApiService } from '../../services/search-api.service';
import { OnDestroy } from '@angular/core';
import { HostBinding } from '@angular/core';


@Component({
  selector: 'app-s-dialog',
  templateUrl: './s-dialog.component.html',
  styleUrls: ['./s-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class SDialogComponent implements OnInit, OnDestroy {
  rate = [{ ratings: 1 },
  { ratings: 2 },
  { ratings: 3 },
  { ratings: 4 },
  { ratings: 5 },
  { ratings: 6 },
  { ratings: 7 },
  { ratings: 8 },
  { ratings: 9 }];

  @HostBinding('class.app-s-dialog') bgColor = true;
  moviesList: any = [];
  genresList: any = [];

  originalMovieList: any = [];
  selectedRatingss: string;
  value = '';
  lang: String = 'en';
  selectedGenre: any;
  selectedLanguage = 'en';
  languageList: any;

  movieFilterObj = {
    filter: 'genre',
    value: ''
  };
  movieObjArray = []; // movie seperated by language

  searchField = new FormControl();
  OriginalObject: any[] = [];

  constructor(
    private store: Store<MovieState.State>,
    private homeService: HomeService,
    private movieListService: MovieListService,
    private segregateMovies: SegregateMovieService,
    private searchService: SearchApiService,
    private _ngzone :NgZone
  ) { }

  ngOnInit() {
    // movie from store
    this.store.select(MovieState.nowPlayingMoviesSelector).subscribe(result => {
      this.originalMovieList = result;
      this.moviesList = result;
      // console.log(this.moviesList);
      this.movieObjArray = this.movieListService.getLanguageList(this.moviesList);
       // get movies with languages
       this.OriginalObject = this.movieObjArray;
      console.log(this.movieObjArray);
    });

    // genre list from service
    this.genresList = this.homeService.getGenres();
    // fetch from api/store
    this.searchField.valueChanges.pipe(debounceTime(400)).subscribe(searchString => {
      this.searchService.getMovies(searchString).subscribe(
        searchList => {
          this.moviesList = searchList.results;
          // console.log(this.moviesList);
          this.movieObjArray = this.movieListService.getLanguageList(this.moviesList);
          this.OriginalObject = this.movieObjArray;
          //  console.log(this.movieObjArray);
          // this.movieObjArray = this.segregateMovies.getSortedbyLanguage(this.languageList, this.moviesList);
        },
        error => {
          this.moviesList = this.searchService.searchMovieFromStore(this.originalMovieList, searchString);
          this.movieObjArray = this.movieListService.getLanguageList(this.moviesList); // get Languages

        }
      );
    });
  }
  changeRatings() {
    this.movieObjArray = this.OriginalObject;
    const selectedRatings = this.selectedRatingss;
      this.movieObjArray = this.searchService.SortBasedOnRatings(selectedRatings, this.movieObjArray)
      console.log(this.movieObjArray);
  }

  // change detection for genre dropdown
  changeGenere() {
    this.movieFilterObj.filter = 'genre';
    this.movieFilterObj.value = this.selectedGenre;
    this.movieFilterObj = Object.assign({}, this.movieFilterObj);
  }

  ngOnDestroy(): void {
    this.moviesList = [];
  }
}
