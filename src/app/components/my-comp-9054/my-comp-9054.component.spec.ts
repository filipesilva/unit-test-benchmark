import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9054Component } from './my-comp-9054.component';

describe('MyComp9054Component', () => {
  let component: MyComp9054Component;
  let fixture: ComponentFixture<MyComp9054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
