import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4054Component } from './my-comp-4054.component';

describe('MyComp4054Component', () => {
  let component: MyComp4054Component;
  let fixture: ComponentFixture<MyComp4054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
