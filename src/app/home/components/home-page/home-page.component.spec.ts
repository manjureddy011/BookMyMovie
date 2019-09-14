import {async , ComponentFixture, TestBed } from '@angular/core/testing';
import {HomePageComponent} from './home-page.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatMenuModule, MatAutocompleteModule} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

describe('HomePageComponent', () => {
   let component: HomePageComponent;
   let fixture: ComponentFixture<HomePageComponent>;

   const routerStub = {
     navigate : arg => {}
   };

   const storeStub = {
    select: arg1 => ({
      subscribe: success => {
        const res = [];
        success(res);
      }
    })
   };

   const HttpClientStub = {
    get: arg1 => ({
      subscribe: (success, err) => {
        const obj = {
          firstname: 'John',
          lastname: 'Doe',
          age: 50,
          eyecolor: 'blue',
          theaters: ['Hello']
        };
        const error = {
          message: 'Error'
        };
        success(obj);
        err(error);
      }
    }),
    put: arg1 => ({
      subscribe: success => {
        const obj = [
          {
            theaters: {}
          }
        ];
        success(obj);
        return {};
      }
    }),
    post: (arg1, arg2) => ({ pipe: () => ({ pipe: () => ({}) }) })
  };


beforeEach(async(() => {
  TestBed.configureTestingModule({
   imports: [MatMenuModule, MatAutocompleteModule],
   schemas: [NO_ERRORS_SCHEMA],
   declarations: [HomePageComponent],
   providers: [
              {provide: HttpClient, useValue: HttpClientStub },
              {provide: Router, useValue: routerStub},
              {provide: Store, useValue: storeStub}]
  }).compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(HomePageComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('shoud create', () => {
 expect(component).toBeTruthy();
});

it('for trackmovie function', () => {
  const index = 1;
  const movie = 1;
  expect(component.trackMovie).toBeDefined();
  spyOn(component, 'trackMovie').and.callThrough();
  component.trackMovie(index, movie);
  expect(component.trackMovie).toHaveBeenCalled();
});
// for get movie method
it('for  get movie method', () => {
   expect(component.getMovies).toBeDefined();
   spyOn(component, 'getMovies').and.callThrough();
   component.getMovies();
   expect(component.getMovies).toHaveBeenCalled();
});

// for tabChanged method
it('for tabChanged method test cases', () => {
    const event = '';
    expect(component.tabChanged).toBeDefined();
    spyOn(component, 'tabChanged').and.callThrough();
    component.tabChanged(event);
    expect(component.tabChanged).toHaveBeenCalled();

});
// for getLanguage method
it('for getLanguage method test case', () => {
  const lang = 'Hindi';
    expect(component.getLanguage).toBeDefined();
    spyOn(component, 'getLanguage').and.callThrough();
    component.getLanguage(lang);
    expect(component.getLanguage).toHaveBeenCalled();
});

// test cases for getGenre
it('for getGenre test cases', () => {
  const gen = 'Male';
  expect(component.getGenre).toBeDefined();
  spyOn(component, 'getGenre').and.callThrough();
  component.getGenre(gen);
  expect(component.getGenre).toHaveBeenCalled();
});

});
