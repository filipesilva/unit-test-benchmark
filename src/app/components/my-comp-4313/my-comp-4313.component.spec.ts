import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4313Component } from './my-comp-4313.component';

describe('MyComp4313Component', () => {
  let component: MyComp4313Component;
  let fixture: ComponentFixture<MyComp4313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
