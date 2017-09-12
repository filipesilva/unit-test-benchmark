import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6765Component } from './my-comp-6765.component';

describe('MyComp6765Component', () => {
  let component: MyComp6765Component;
  let fixture: ComponentFixture<MyComp6765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
