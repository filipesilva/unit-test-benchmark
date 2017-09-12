import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5611Component } from './my-comp-5611.component';

describe('MyComp5611Component', () => {
  let component: MyComp5611Component;
  let fixture: ComponentFixture<MyComp5611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
