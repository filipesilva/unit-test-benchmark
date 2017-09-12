import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7309Component } from './my-comp-7309.component';

describe('MyComp7309Component', () => {
  let component: MyComp7309Component;
  let fixture: ComponentFixture<MyComp7309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
