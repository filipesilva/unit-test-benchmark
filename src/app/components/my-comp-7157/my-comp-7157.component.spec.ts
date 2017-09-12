import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7157Component } from './my-comp-7157.component';

describe('MyComp7157Component', () => {
  let component: MyComp7157Component;
  let fixture: ComponentFixture<MyComp7157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
