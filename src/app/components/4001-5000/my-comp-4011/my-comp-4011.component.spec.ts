import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4011Component } from './my-comp-4011.component';

describe('MyComp4011Component', () => {
  let component: MyComp4011Component;
  let fixture: ComponentFixture<MyComp4011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
