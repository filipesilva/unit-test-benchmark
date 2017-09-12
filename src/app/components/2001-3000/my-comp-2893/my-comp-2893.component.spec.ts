import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2893Component } from './my-comp-2893.component';

describe('MyComp2893Component', () => {
  let component: MyComp2893Component;
  let fixture: ComponentFixture<MyComp2893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
