import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9369Component } from './my-comp-9369.component';

describe('MyComp9369Component', () => {
  let component: MyComp9369Component;
  let fixture: ComponentFixture<MyComp9369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
