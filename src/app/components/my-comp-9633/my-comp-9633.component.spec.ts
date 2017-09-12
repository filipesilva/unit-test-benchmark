import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9633Component } from './my-comp-9633.component';

describe('MyComp9633Component', () => {
  let component: MyComp9633Component;
  let fixture: ComponentFixture<MyComp9633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
