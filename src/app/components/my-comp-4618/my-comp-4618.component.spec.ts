import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4618Component } from './my-comp-4618.component';

describe('MyComp4618Component', () => {
  let component: MyComp4618Component;
  let fixture: ComponentFixture<MyComp4618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
