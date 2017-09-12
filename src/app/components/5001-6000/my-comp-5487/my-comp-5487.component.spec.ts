import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5487Component } from './my-comp-5487.component';

describe('MyComp5487Component', () => {
  let component: MyComp5487Component;
  let fixture: ComponentFixture<MyComp5487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
