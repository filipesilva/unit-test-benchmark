import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9818Component } from './my-comp-9818.component';

describe('MyComp9818Component', () => {
  let component: MyComp9818Component;
  let fixture: ComponentFixture<MyComp9818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
