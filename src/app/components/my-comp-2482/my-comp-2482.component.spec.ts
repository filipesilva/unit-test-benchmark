import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2482Component } from './my-comp-2482.component';

describe('MyComp2482Component', () => {
  let component: MyComp2482Component;
  let fixture: ComponentFixture<MyComp2482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
