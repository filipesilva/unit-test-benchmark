import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6963Component } from './my-comp-6963.component';

describe('MyComp6963Component', () => {
  let component: MyComp6963Component;
  let fixture: ComponentFixture<MyComp6963Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6963Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
