import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9731Component } from './my-comp-9731.component';

describe('MyComp9731Component', () => {
  let component: MyComp9731Component;
  let fixture: ComponentFixture<MyComp9731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
