import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9348Component } from './my-comp-9348.component';

describe('MyComp9348Component', () => {
  let component: MyComp9348Component;
  let fixture: ComponentFixture<MyComp9348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
