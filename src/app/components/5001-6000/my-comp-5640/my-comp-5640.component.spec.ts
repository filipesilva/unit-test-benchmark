import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5640Component } from './my-comp-5640.component';

describe('MyComp5640Component', () => {
  let component: MyComp5640Component;
  let fixture: ComponentFixture<MyComp5640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
