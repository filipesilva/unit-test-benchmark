import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7089Component } from './my-comp-7089.component';

describe('MyComp7089Component', () => {
  let component: MyComp7089Component;
  let fixture: ComponentFixture<MyComp7089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
