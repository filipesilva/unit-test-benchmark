import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5122Component } from './my-comp-5122.component';

describe('MyComp5122Component', () => {
  let component: MyComp5122Component;
  let fixture: ComponentFixture<MyComp5122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
