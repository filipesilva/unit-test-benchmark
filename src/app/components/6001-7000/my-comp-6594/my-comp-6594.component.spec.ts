import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6594Component } from './my-comp-6594.component';

describe('MyComp6594Component', () => {
  let component: MyComp6594Component;
  let fixture: ComponentFixture<MyComp6594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
