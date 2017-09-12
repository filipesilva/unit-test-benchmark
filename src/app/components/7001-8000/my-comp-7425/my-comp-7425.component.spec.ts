import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7425Component } from './my-comp-7425.component';

describe('MyComp7425Component', () => {
  let component: MyComp7425Component;
  let fixture: ComponentFixture<MyComp7425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
