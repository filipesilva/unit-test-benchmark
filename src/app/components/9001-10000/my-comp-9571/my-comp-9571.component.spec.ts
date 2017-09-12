import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9571Component } from './my-comp-9571.component';

describe('MyComp9571Component', () => {
  let component: MyComp9571Component;
  let fixture: ComponentFixture<MyComp9571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
