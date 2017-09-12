import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9407Component } from './my-comp-9407.component';

describe('MyComp9407Component', () => {
  let component: MyComp9407Component;
  let fixture: ComponentFixture<MyComp9407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
