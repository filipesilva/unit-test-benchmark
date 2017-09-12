import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5086Component } from './my-comp-5086.component';

describe('MyComp5086Component', () => {
  let component: MyComp5086Component;
  let fixture: ComponentFixture<MyComp5086Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5086Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5086Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
