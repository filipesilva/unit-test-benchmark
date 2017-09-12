import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4047Component } from './my-comp-4047.component';

describe('MyComp4047Component', () => {
  let component: MyComp4047Component;
  let fixture: ComponentFixture<MyComp4047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
