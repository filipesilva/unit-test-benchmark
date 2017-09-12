import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7187Component } from './my-comp-7187.component';

describe('MyComp7187Component', () => {
  let component: MyComp7187Component;
  let fixture: ComponentFixture<MyComp7187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
