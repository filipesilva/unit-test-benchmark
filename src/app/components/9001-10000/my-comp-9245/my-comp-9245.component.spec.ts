import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9245Component } from './my-comp-9245.component';

describe('MyComp9245Component', () => {
  let component: MyComp9245Component;
  let fixture: ComponentFixture<MyComp9245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
