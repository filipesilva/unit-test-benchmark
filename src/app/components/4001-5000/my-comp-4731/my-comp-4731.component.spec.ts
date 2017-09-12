import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4731Component } from './my-comp-4731.component';

describe('MyComp4731Component', () => {
  let component: MyComp4731Component;
  let fixture: ComponentFixture<MyComp4731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
