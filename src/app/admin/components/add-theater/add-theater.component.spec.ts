import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {AddTheaterComponent} from './add-theater.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { USE_VALUE } from '@angular/core/src/di/injector';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material';


describe('AddTheaterComponent', () => {
  let component: AddTheaterComponent;
  let fixture: ComponentFixture<AddTheaterComponent>;

  const FormBuilderStub = new FormBuilder();
  const MatDialogStub = {
    open: (dialogComponentName1, object2) => ({
      afterClosed: () => {
        return { subscribe: result => [] };
      }
    }),
    closeAll: () => ({
      afterClosed: () => {
        return { subscribe: result => [] };
      }
    })
  };


  beforeEach(async(() => {
   TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [AddTheaterComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        {provide: FormBuilder, useValue: FormBuilderStub},
        {provide: MatDialog, useValue: MatDialogStub}
      ]
   }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTheaterComponent);
    component = fixture.componentInstance;
    component.newTheater =  FormBuilderStub.group({
      tid: new FormControl(),
      name: new FormControl(),
      city: new FormControl(),
      gLocation: new FormControl(),
      capacity: new FormControl()
    });
    fixture.detectChanges();
  });

  it('Shoud be there', () => {
   expect(component).toBeTruthy();
  });
// for submit
  it('Test cases for Submit button', () => {
    expect(component.onSubmit).toBeDefined();
    spyOn(component, 'onSubmit').and.callThrough();
    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  // for dialogOK
  it('Test case for DialogOk', () => {
     expect(component.dialogOk).toBeDefined();
     spyOn(component, 'dialogOk').and.callThrough();
     component.dialogOk();
     expect(component.dialogOk).toHaveBeenCalled();
  });




});
