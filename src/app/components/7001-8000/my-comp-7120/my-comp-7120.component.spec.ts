import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7120Component } from './my-comp-7120.component';

describe('MyComp7120Component', () => {
  let component: MyComp7120Component;
  let fixture: ComponentFixture<MyComp7120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
