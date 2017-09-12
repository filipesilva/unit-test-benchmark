import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4052Component } from './my-comp-4052.component';

describe('MyComp4052Component', () => {
  let component: MyComp4052Component;
  let fixture: ComponentFixture<MyComp4052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
