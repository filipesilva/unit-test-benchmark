import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9497Component } from './my-comp-9497.component';

describe('MyComp9497Component', () => {
  let component: MyComp9497Component;
  let fixture: ComponentFixture<MyComp9497Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9497Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
