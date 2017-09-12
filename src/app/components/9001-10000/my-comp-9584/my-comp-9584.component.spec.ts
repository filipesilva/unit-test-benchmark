import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9584Component } from './my-comp-9584.component';

describe('MyComp9584Component', () => {
  let component: MyComp9584Component;
  let fixture: ComponentFixture<MyComp9584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
