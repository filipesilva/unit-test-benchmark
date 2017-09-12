import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9378Component } from './my-comp-9378.component';

describe('MyComp9378Component', () => {
  let component: MyComp9378Component;
  let fixture: ComponentFixture<MyComp9378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
