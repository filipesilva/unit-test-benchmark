import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4900Component } from './my-comp-4900.component';

describe('MyComp4900Component', () => {
  let component: MyComp4900Component;
  let fixture: ComponentFixture<MyComp4900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
