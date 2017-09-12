import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4419Component } from './my-comp-4419.component';

describe('MyComp4419Component', () => {
  let component: MyComp4419Component;
  let fixture: ComponentFixture<MyComp4419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
