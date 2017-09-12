import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4355Component } from './my-comp-4355.component';

describe('MyComp4355Component', () => {
  let component: MyComp4355Component;
  let fixture: ComponentFixture<MyComp4355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
