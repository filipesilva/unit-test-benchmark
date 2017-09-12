import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6483Component } from './my-comp-6483.component';

describe('MyComp6483Component', () => {
  let component: MyComp6483Component;
  let fixture: ComponentFixture<MyComp6483Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6483Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
