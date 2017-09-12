import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp778Component } from './my-comp-778.component';

describe('MyComp778Component', () => {
  let component: MyComp778Component;
  let fixture: ComponentFixture<MyComp778Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp778Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp778Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
