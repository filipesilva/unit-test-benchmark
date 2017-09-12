import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6707Component } from './my-comp-6707.component';

describe('MyComp6707Component', () => {
  let component: MyComp6707Component;
  let fixture: ComponentFixture<MyComp6707Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6707Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
