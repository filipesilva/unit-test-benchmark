import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7799Component } from './my-comp-7799.component';

describe('MyComp7799Component', () => {
  let component: MyComp7799Component;
  let fixture: ComponentFixture<MyComp7799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
