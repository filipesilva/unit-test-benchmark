import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6326Component } from './my-comp-6326.component';

describe('MyComp6326Component', () => {
  let component: MyComp6326Component;
  let fixture: ComponentFixture<MyComp6326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
