import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5243Component } from './my-comp-5243.component';

describe('MyComp5243Component', () => {
  let component: MyComp5243Component;
  let fixture: ComponentFixture<MyComp5243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
