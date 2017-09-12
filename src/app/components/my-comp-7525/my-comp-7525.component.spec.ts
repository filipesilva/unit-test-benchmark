import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7525Component } from './my-comp-7525.component';

describe('MyComp7525Component', () => {
  let component: MyComp7525Component;
  let fixture: ComponentFixture<MyComp7525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
