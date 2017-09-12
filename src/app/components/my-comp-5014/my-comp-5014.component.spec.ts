import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5014Component } from './my-comp-5014.component';

describe('MyComp5014Component', () => {
  let component: MyComp5014Component;
  let fixture: ComponentFixture<MyComp5014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
