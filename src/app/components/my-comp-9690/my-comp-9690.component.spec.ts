import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9690Component } from './my-comp-9690.component';

describe('MyComp9690Component', () => {
  let component: MyComp9690Component;
  let fixture: ComponentFixture<MyComp9690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
