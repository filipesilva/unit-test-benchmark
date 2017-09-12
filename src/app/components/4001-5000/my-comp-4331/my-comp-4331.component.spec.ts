import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4331Component } from './my-comp-4331.component';

describe('MyComp4331Component', () => {
  let component: MyComp4331Component;
  let fixture: ComponentFixture<MyComp4331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
