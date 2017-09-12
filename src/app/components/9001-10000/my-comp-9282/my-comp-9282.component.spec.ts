import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9282Component } from './my-comp-9282.component';

describe('MyComp9282Component', () => {
  let component: MyComp9282Component;
  let fixture: ComponentFixture<MyComp9282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
