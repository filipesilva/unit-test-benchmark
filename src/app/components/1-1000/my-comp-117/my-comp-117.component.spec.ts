import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp117Component } from './my-comp-117.component';

describe('MyComp117Component', () => {
  let component: MyComp117Component;
  let fixture: ComponentFixture<MyComp117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
