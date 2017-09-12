import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4233Component } from './my-comp-4233.component';

describe('MyComp4233Component', () => {
  let component: MyComp4233Component;
  let fixture: ComponentFixture<MyComp4233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
