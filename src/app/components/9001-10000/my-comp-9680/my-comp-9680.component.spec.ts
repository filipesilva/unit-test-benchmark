import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9680Component } from './my-comp-9680.component';

describe('MyComp9680Component', () => {
  let component: MyComp9680Component;
  let fixture: ComponentFixture<MyComp9680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
