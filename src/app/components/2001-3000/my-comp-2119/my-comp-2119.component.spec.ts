import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2119Component } from './my-comp-2119.component';

describe('MyComp2119Component', () => {
  let component: MyComp2119Component;
  let fixture: ComponentFixture<MyComp2119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
