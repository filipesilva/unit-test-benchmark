import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7204Component } from './my-comp-7204.component';

describe('MyComp7204Component', () => {
  let component: MyComp7204Component;
  let fixture: ComponentFixture<MyComp7204Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7204Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
