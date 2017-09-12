import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7743Component } from './my-comp-7743.component';

describe('MyComp7743Component', () => {
  let component: MyComp7743Component;
  let fixture: ComponentFixture<MyComp7743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
