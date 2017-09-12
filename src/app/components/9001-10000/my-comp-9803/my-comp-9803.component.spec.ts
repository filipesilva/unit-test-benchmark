import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9803Component } from './my-comp-9803.component';

describe('MyComp9803Component', () => {
  let component: MyComp9803Component;
  let fixture: ComponentFixture<MyComp9803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
