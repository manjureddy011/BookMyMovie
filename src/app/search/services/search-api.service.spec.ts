import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SearchApiService } from './search-api.service';
describe('SearchApiService', () => {
  let service: SearchApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchApiService]
    });
    service = TestBed.get(SearchApiService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('test getMovies',()=>{
    const movieslist = [];
     expect(service.getMovies).toBeDefined();
     spyOn(service,'getMovies').and.callThrough();
     service.getMovies(movieslist);
     expect(service.getMovies).toHaveBeenCalled();
  });
  it('searchMovieFromStore',() => {
     const movielist = [];
     const qry = '';
     expect(service.getMovies).toBeDefined();
     spyOn(service,"searchMovieFromStore").and.callThrough();
     service.searchMovieFromStore(movielist,qry);
     expect(service.searchMovieFromStore).toHaveBeenCalled();
  });
  it('SortBasedOnRatings',() => {
     const movielist = [];
     const qry = '';
     expect(service.SortBasedOnRatings).toBeDefined();
     spyOn(service,"SortBasedOnRatings").and.callThrough();
     service.SortBasedOnRatings(qry,movielist);
     expect(service.SortBasedOnRatings).toHaveBeenCalled();
  });
});
