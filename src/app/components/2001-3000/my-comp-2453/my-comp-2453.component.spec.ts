import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2453Component } from './my-comp-2453.component';

describe('MyComp2453Component', () => {
  let component: MyComp2453Component;
  let fixture: ComponentFixture<MyComp2453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
