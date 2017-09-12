import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6679Component } from './my-comp-6679.component';

describe('MyComp6679Component', () => {
  let component: MyComp6679Component;
  let fixture: ComponentFixture<MyComp6679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
