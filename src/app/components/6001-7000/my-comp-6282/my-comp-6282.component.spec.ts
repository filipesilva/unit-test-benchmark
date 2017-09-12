import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6282Component } from './my-comp-6282.component';

describe('MyComp6282Component', () => {
  let component: MyComp6282Component;
  let fixture: ComponentFixture<MyComp6282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
