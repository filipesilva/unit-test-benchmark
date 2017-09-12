import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7220Component } from './my-comp-7220.component';

describe('MyComp7220Component', () => {
  let component: MyComp7220Component;
  let fixture: ComponentFixture<MyComp7220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
