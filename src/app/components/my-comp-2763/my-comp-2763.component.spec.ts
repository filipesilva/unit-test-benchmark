import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2763Component } from './my-comp-2763.component';

describe('MyComp2763Component', () => {
  let component: MyComp2763Component;
  let fixture: ComponentFixture<MyComp2763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
