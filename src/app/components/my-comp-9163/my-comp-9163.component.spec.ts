import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9163Component } from './my-comp-9163.component';

describe('MyComp9163Component', () => {
  let component: MyComp9163Component;
  let fixture: ComponentFixture<MyComp9163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
