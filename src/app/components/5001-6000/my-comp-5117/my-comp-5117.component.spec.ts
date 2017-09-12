import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5117Component } from './my-comp-5117.component';

describe('MyComp5117Component', () => {
  let component: MyComp5117Component;
  let fixture: ComponentFixture<MyComp5117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
