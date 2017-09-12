import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7117Component } from './my-comp-7117.component';

describe('MyComp7117Component', () => {
  let component: MyComp7117Component;
  let fixture: ComponentFixture<MyComp7117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
