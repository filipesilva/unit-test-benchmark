import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2331Component } from './my-comp-2331.component';

describe('MyComp2331Component', () => {
  let component: MyComp2331Component;
  let fixture: ComponentFixture<MyComp2331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
