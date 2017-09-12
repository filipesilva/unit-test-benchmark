import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2645Component } from './my-comp-2645.component';

describe('MyComp2645Component', () => {
  let component: MyComp2645Component;
  let fixture: ComponentFixture<MyComp2645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
