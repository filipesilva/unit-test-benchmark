import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9352Component } from './my-comp-9352.component';

describe('MyComp9352Component', () => {
  let component: MyComp9352Component;
  let fixture: ComponentFixture<MyComp9352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
