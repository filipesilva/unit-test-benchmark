import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2122Component } from './my-comp-2122.component';

describe('MyComp2122Component', () => {
  let component: MyComp2122Component;
  let fixture: ComponentFixture<MyComp2122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
