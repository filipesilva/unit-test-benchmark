import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4003Component } from './my-comp-4003.component';

describe('MyComp4003Component', () => {
  let component: MyComp4003Component;
  let fixture: ComponentFixture<MyComp4003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
