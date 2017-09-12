import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5292Component } from './my-comp-5292.component';

describe('MyComp5292Component', () => {
  let component: MyComp5292Component;
  let fixture: ComponentFixture<MyComp5292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
