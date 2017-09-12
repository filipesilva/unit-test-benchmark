import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5195Component } from './my-comp-5195.component';

describe('MyComp5195Component', () => {
  let component: MyComp5195Component;
  let fixture: ComponentFixture<MyComp5195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
