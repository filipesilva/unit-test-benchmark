import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2987Component } from './my-comp-2987.component';

describe('MyComp2987Component', () => {
  let component: MyComp2987Component;
  let fixture: ComponentFixture<MyComp2987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
