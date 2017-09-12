import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2693Component } from './my-comp-2693.component';

describe('MyComp2693Component', () => {
  let component: MyComp2693Component;
  let fixture: ComponentFixture<MyComp2693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
