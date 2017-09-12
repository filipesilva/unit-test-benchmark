import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp412Component } from './my-comp-412.component';

describe('MyComp412Component', () => {
  let component: MyComp412Component;
  let fixture: ComponentFixture<MyComp412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
