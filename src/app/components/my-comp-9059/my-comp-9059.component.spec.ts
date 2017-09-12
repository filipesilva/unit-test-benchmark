import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9059Component } from './my-comp-9059.component';

describe('MyComp9059Component', () => {
  let component: MyComp9059Component;
  let fixture: ComponentFixture<MyComp9059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
