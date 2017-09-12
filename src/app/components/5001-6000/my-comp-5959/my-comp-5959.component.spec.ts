import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5959Component } from './my-comp-5959.component';

describe('MyComp5959Component', () => {
  let component: MyComp5959Component;
  let fixture: ComponentFixture<MyComp5959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
