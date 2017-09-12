import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2558Component } from './my-comp-2558.component';

describe('MyComp2558Component', () => {
  let component: MyComp2558Component;
  let fixture: ComponentFixture<MyComp2558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
