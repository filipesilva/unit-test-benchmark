import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4205Component } from './my-comp-4205.component';

describe('MyComp4205Component', () => {
  let component: MyComp4205Component;
  let fixture: ComponentFixture<MyComp4205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
