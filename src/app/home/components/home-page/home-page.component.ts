import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ViewChild,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [
    {provide: VIRTUAL_SCROLL_STRATEGY,useClass:HomePageComponent}
  ]
})
export class HomePageComponent implements OnInit {
  @Input()
  moviesList;

  @Input()
  upcomingList;

  @Input()
  theaterList;

  @Input()
  userPreference;

  @Output()
  getNewNowPlayingMovies: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  getNewUpcomingMovies: EventEmitter<number> = new EventEmitter<number>();

  activeTabIndex = 0;
  nowPlayingMovieFetchedPageNum = 1;
  upcomingMoviesFetchedPageNum = 0;
  selectedLanguage = '';
  selectedGenre = '';
  languageList = [{ id: 'en', name: 'English' }, { id: 'ja', name: 'Japanese' }, { id: 'zh', name: 'Chinese' }];
  constructor() {}

  ngOnInit() {
    this.getNewNowPlayingMovies.emit(1);
    this.getNewUpcomingMovies.emit(1);
  }

  trackMovie(index, movie) {
    if (movie) {
      return movie.id;
    } else {
      return -1;
    }
  }
  getMovies() {}

  tabChanged(event) {
    this.activeTabIndex = event;
  }

  getLanguage(lang) {
    this.selectedLanguage = lang;
  
  }

  getGenre(g) {
    this.selectedGenre = g;
  }
}
