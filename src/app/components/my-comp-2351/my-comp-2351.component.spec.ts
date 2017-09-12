import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2351Component } from './my-comp-2351.component';

describe('MyComp2351Component', () => {
  let component: MyComp2351Component;
  let fixture: ComponentFixture<MyComp2351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
