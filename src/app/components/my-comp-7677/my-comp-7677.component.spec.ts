import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7677Component } from './my-comp-7677.component';

describe('MyComp7677Component', () => {
  let component: MyComp7677Component;
  let fixture: ComponentFixture<MyComp7677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
