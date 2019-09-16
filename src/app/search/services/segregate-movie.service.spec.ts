import { TestBed } from '@angular/core/testing';
import { SegregateMovieService } from './segregate-movie.service';
describe('SegregateMovieService', () => {
  let service: SegregateMovieService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SegregateMovieService] });
    service = TestBed.get(SegregateMovieService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
