import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9588Component } from './my-comp-9588.component';

describe('MyComp9588Component', () => {
  let component: MyComp9588Component;
  let fixture: ComponentFixture<MyComp9588Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9588Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
