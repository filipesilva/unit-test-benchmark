import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9233Component } from './my-comp-9233.component';

describe('MyComp9233Component', () => {
  let component: MyComp9233Component;
  let fixture: ComponentFixture<MyComp9233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
