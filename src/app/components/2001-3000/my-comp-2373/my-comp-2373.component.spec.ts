import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2373Component } from './my-comp-2373.component';

describe('MyComp2373Component', () => {
  let component: MyComp2373Component;
  let fixture: ComponentFixture<MyComp2373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
