import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5047Component } from './my-comp-5047.component';

describe('MyComp5047Component', () => {
  let component: MyComp5047Component;
  let fixture: ComponentFixture<MyComp5047Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5047Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
