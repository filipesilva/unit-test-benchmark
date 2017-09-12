import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9313Component } from './my-comp-9313.component';

describe('MyComp9313Component', () => {
  let component: MyComp9313Component;
  let fixture: ComponentFixture<MyComp9313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
