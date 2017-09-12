import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9507Component } from './my-comp-9507.component';

describe('MyComp9507Component', () => {
  let component: MyComp9507Component;
  let fixture: ComponentFixture<MyComp9507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
