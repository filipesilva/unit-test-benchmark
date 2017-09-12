import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4117Component } from './my-comp-4117.component';

describe('MyComp4117Component', () => {
  let component: MyComp4117Component;
  let fixture: ComponentFixture<MyComp4117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
