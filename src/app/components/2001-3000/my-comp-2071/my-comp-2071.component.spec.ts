import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2071Component } from './my-comp-2071.component';

describe('MyComp2071Component', () => {
  let component: MyComp2071Component;
  let fixture: ComponentFixture<MyComp2071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
