import {AdminComponent} from '../admin/admin.component';
import {async, TestBed, ComponentFixture} from '@angular/core/testing';
import {AdminService} from '../../services/admin.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Store} from '@ngrx/store';
import { FormBuilder } from '@angular/forms';

describe('test case for AdminComponent', () => {
    let component: AdminComponent;
    let fixture: ComponentFixture<AdminComponent>;


    // const formData = new FormBuilder();

    const StoreStub = {
      select: arg1 => ({
        subscribe: success => {
          const res = [];
          success(res);
        }
      })
    };

    const AdminServiceStub = {
      addTheater: arg1 => {},
      newTheater: arg1 => {}
    };


    beforeEach(async(() => {
      TestBed.configureTestingModule({
         schemas : [NO_ERRORS_SCHEMA],
         declarations : [AdminComponent],
         providers: [
           {provide: AdminService, useValue: AdminServiceStub},
           {provide: Store, useValue: StoreStub}
         ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AdminComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('Shoud be present', () => {
     expect(component).toBeTruthy();
    });
    // test case for addTheater
    it('test cases for add theater', () => {
      const formData = {};
      expect(component.addTheater).toBeDefined();
      spyOn(component, 'addTheater').and.callThrough();
      component.addTheater(formData);
      expect(component.addTheater).toHaveBeenCalled();
    });
});

