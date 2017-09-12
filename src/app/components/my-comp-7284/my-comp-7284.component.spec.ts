import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7284Component } from './my-comp-7284.component';

describe('MyComp7284Component', () => {
  let component: MyComp7284Component;
  let fixture: ComponentFixture<MyComp7284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
