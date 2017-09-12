import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2014Component } from './my-comp-2014.component';

describe('MyComp2014Component', () => {
  let component: MyComp2014Component;
  let fixture: ComponentFixture<MyComp2014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
