import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4143Component } from './my-comp-4143.component';

describe('MyComp4143Component', () => {
  let component: MyComp4143Component;
  let fixture: ComponentFixture<MyComp4143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
