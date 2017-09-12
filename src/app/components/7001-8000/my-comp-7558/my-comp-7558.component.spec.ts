import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7558Component } from './my-comp-7558.component';

describe('MyComp7558Component', () => {
  let component: MyComp7558Component;
  let fixture: ComponentFixture<MyComp7558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
