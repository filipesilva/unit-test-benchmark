import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6247Component } from './my-comp-6247.component';

describe('MyComp6247Component', () => {
  let component: MyComp6247Component;
  let fixture: ComponentFixture<MyComp6247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
