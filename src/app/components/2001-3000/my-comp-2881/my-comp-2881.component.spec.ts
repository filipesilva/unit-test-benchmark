import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2881Component } from './my-comp-2881.component';

describe('MyComp2881Component', () => {
  let component: MyComp2881Component;
  let fixture: ComponentFixture<MyComp2881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
