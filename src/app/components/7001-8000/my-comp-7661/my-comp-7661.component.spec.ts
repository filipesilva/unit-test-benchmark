import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7661Component } from './my-comp-7661.component';

describe('MyComp7661Component', () => {
  let component: MyComp7661Component;
  let fixture: ComponentFixture<MyComp7661Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7661Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
