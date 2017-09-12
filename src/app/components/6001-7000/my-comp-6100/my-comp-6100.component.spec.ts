import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6100Component } from './my-comp-6100.component';

describe('MyComp6100Component', () => {
  let component: MyComp6100Component;
  let fixture: ComponentFixture<MyComp6100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
