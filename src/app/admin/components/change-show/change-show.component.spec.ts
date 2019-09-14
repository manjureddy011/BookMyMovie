// import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { AdminService } from '../../services/admin.service';
// import { MatDialog } from '@angular/material';
// import { ChangeShowComponent } from './change-show.component';
// describe('ChangeShowComponent', () => {
//   let component: ChangeShowComponent;
//   let fixture: ComponentFixture<ChangeShowComponent>;
//   beforeEach(() => {
//     const adminServiceStub = {
//       searchMovie: value => ({ subscribe: () => ({}) }),
//       saveNowPlaying: (nowPlaying, arg1) => ({})
//     };
//     const matDialogStub = { open: successDialog => ({}), closeAll: () => ({}) };
//     TestBed.configureTestingModule({
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [ChangeShowComponent],
//       providers: [
//         { provide: AdminService, useValue: adminServiceStub },
//         { provide: MatDialog, useValue: matDialogStub }
//       ]
//     });
//     fixture = TestBed.createComponent(ChangeShowComponent);
//     component = fixture.componentInstance;
//   });
//   it('can load instance', () => {
//     expect(component).toBeTruthy();
//   });
//   it('nowShowing defaults to: []', () => {
//     expect(component.nowShowing).toEqual([]);
//   });
//   it('nowPlaying defaults to: []', () => {
//     expect(component.nowPlaying).toEqual([]);
//   });
//   describe('ngOnInit', () => {
//     it('makes expected calls', () => {
//       const adminServiceStub: AdminService = fixture.debugElement.injector.get(
//         AdminService
//       );
//       spyOn(adminServiceStub, 'searchMovie').and.callThrough();
//       component.ngOnInit();
//       expect(adminServiceStub.searchMovie).toHaveBeenCalled();
//     });
//   });
//   describe('save', () => {
//     it('makes expected calls', () => {
//       const adminServiceStub: AdminService = fixture.debugElement.injector.get(
//         AdminService
//       );
//       const matDialogStub: MatDialog = fixture.debugElement.injector.get(
//         MatDialog
//       );
//       spyOn(adminServiceStub, 'saveNowPlaying').and.callThrough();
//       spyOn(matDialogStub, 'open').and.callThrough();
//       component.save();
//       expect(adminServiceStub.saveNowPlaying).toHaveBeenCalled();
//       expect(matDialogStub.open).toHaveBeenCalled();
//     });
//   });
//   describe('dialogOk', () => {
//     it('makes expected calls', () => {
//       const matDialogStub: MatDialog = fixture.debugElement.injector.get(
//         MatDialog
//       );
//       spyOn(matDialogStub, 'closeAll').and.callThrough();
//       component.dialogOk();
//       expect(matDialogStub.closeAll).toHaveBeenCalled();
//     });
//   });
// });

import { NO_ERRORS_SCHEMA } from '@angular/core';
import {ChangeShowComponent} from '../change-show/change-show.component';
import { MatDialog } from '@angular/material';
import {AdminService} from '../../services/admin.service';
import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import { FormControl } from '@angular/forms';

describe('Test cases for change show component', () => {
    let component: ChangeShowComponent;
    let fixture: ComponentFixture<ChangeShowComponent>;
    const AdminServiceStub = {
       saveNowPlaying: (arg1, arg2) => {}
      };
    const MatDialogStub = { open: successDialog => ({}), closeAll: () => ({}) };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ChangeShowComponent ],
      providers: [
        {provide: AdminService, useValue: AdminServiceStub},
        {provide: MatDialog, useValue: MatDialogStub}
      ]

    }).compileComponents();
  }));
  beforeEach(() => {
     fixture =  TestBed.createComponent(ChangeShowComponent);
     component = fixture.componentInstance;
     component.movieInput =  new FormControl();
     component.selectTheater =  new FormControl();
     fixture.detectChanges();
  });
  it('Shoud Present', () => {
    expect(component).toBeTruthy();
  });
  // test case for add movie
  it('test case for add movie', () => {
      const movie = {
        name: 'xxxx',
        id: 1
      };
      expect(component.addMovie).toBeDefined();
      spyOn(component, 'addMovie').and.callThrough();
      component.addMovie(movie);
      expect(component.addMovie).toHaveBeenCalled();
  });
  // test case for save
  it('test case for save', () => {
    expect(component.save).toBeDefined();
    spyOn(component, 'save').and.callThrough();
    component.save();
    expect(component.save).toHaveBeenCalled();
  });
 // test case for cancel
  it('test case for cancel', () => {
    expect(component.cancel).toBeDefined();
    spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(component.cancel).toHaveBeenCalled();
  });
 // test case for dialogOK
  it('test case for dialogOK', () => {
    expect(component.dialogOk).toBeDefined();
    spyOn(component, 'dialogOk').and.callThrough();
    component.dialogOk();
    expect(component.dialogOk).toHaveBeenCalled();
  });


});
