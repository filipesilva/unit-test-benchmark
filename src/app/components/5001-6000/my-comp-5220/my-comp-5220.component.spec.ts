import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5220Component } from './my-comp-5220.component';

describe('MyComp5220Component', () => {
  let component: MyComp5220Component;
  let fixture: ComponentFixture<MyComp5220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
