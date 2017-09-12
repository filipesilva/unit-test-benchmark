import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6778Component } from './my-comp-6778.component';

describe('MyComp6778Component', () => {
  let component: MyComp6778Component;
  let fixture: ComponentFixture<MyComp6778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
