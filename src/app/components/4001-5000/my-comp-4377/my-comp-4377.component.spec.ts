import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4377Component } from './my-comp-4377.component';

describe('MyComp4377Component', () => {
  let component: MyComp4377Component;
  let fixture: ComponentFixture<MyComp4377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
