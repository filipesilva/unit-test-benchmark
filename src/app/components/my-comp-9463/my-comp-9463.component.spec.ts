import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9463Component } from './my-comp-9463.component';

describe('MyComp9463Component', () => {
  let component: MyComp9463Component;
  let fixture: ComponentFixture<MyComp9463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
