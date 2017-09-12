import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9876Component } from './my-comp-9876.component';

describe('MyComp9876Component', () => {
  let component: MyComp9876Component;
  let fixture: ComponentFixture<MyComp9876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
