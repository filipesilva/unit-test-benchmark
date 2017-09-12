import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4881Component } from './my-comp-4881.component';

describe('MyComp4881Component', () => {
  let component: MyComp4881Component;
  let fixture: ComponentFixture<MyComp4881Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4881Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4881Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
