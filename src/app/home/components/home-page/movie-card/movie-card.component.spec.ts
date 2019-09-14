import {NO_ERRORS_SCHEMA } from '@angular/core';
import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import { MatDialog, MatMenuModule, MatAutocompleteModule } from '@angular/material';
import {MovieCardComponent} from './movie-card.component';



describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

    const MatDialogStub = {
        open: (dialogComponentName1, object2) => ({
          afterClosed: () => {
            return { subscribe: result => [] };
          }
        }),
        closeAll: () => ({
          afterClosed: () => {
            return { subscribe: result => [] };
          }
        })
      };

    beforeEach(async(() => {
   TestBed.configureTestingModule({
    imports: [MatMenuModule, MatAutocompleteModule],
     declarations: [MovieCardComponent],
     schemas: [NO_ERRORS_SCHEMA],
     providers: [
       {provide: MatDialog, useValue: MatDialogStub}
    ]
   }).compileComponents();
  }));
beforeEach(() => {
  fixture = TestBed.createComponent(MovieCardComponent);
  component = fixture.componentInstance;
  component.movie = [];
  component.theaterList = [];
  component.category = [];

  fixture.detectChanges();
});

it('Shoud Create', () => {
  expect(component).toBeTruthy();
});
// test cases for onValChange
it('test cases for value changes', () => {
   const strr = 'string';
    expect(component.onValChange).toBeDefined();
    spyOn(component, 'onValChange').and.callThrough();
    component.onValChange(strr);
    expect(component.onValChange).toHaveBeenCalled();
});

// test case for isInvalid method
it('test case for isInvalid', () => {
 expect(component.onValChange).toBeDefined();
 spyOn(component, 'isInvalid').and.callThrough();
 component.isInvalid();
 expect(component.isInvalid).toHaveBeenCalled();
});
// test case for checKToDialog
  it('test case for checkToDialog', () => {
   expect(component.checKToDialog).toBeDefined();
   spyOn(component, 'checKToDialog').and.callThrough();
   component.checKToDialog();
   expect(component.checKToDialog).toHaveBeenCalled();
  });
  // test case for preBookDialog
  it('test case for preBookDialog', () => {
    expect(component.preBookDialog).toBeDefined();
    spyOn(component, 'preBookDialog').and.callThrough();
    component.preBookDialog();
    expect(component.preBookDialog).toHaveBeenCalled();
   });
    // test case for openDialog
  // it('test case for openDialog', () => {
  //   expect(component.openDialog).toBeDefined();
  //   spyOn(component,'openDialog').and.callThrough();
  //   component.openDialog();
  //   expect(component.openDialog).toHaveBeenCalled();
  //  });
    // test case for trackCastandCrew
  it('test case for trackCastandCrew', () => {
    const ind = 1;
    const cast = 1;
    expect(component.trackCastandCrew).toBeDefined();
    spyOn(component, 'trackCastandCrew').and.callThrough();
    component.trackCastandCrew(ind, cast);
    expect(component.trackCastandCrew).toHaveBeenCalled();
   });
});
