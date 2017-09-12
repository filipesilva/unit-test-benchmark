import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2446Component } from './my-comp-2446.component';

describe('MyComp2446Component', () => {
  let component: MyComp2446Component;
  let fixture: ComponentFixture<MyComp2446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
