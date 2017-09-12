import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9437Component } from './my-comp-9437.component';

describe('MyComp9437Component', () => {
  let component: MyComp9437Component;
  let fixture: ComponentFixture<MyComp9437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
