import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2556Component } from './my-comp-2556.component';

describe('MyComp2556Component', () => {
  let component: MyComp2556Component;
  let fixture: ComponentFixture<MyComp2556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
