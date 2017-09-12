import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9385Component } from './my-comp-9385.component';

describe('MyComp9385Component', () => {
  let component: MyComp9385Component;
  let fixture: ComponentFixture<MyComp9385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
