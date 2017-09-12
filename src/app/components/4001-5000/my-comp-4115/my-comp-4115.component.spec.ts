import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4115Component } from './my-comp-4115.component';

describe('MyComp4115Component', () => {
  let component: MyComp4115Component;
  let fixture: ComponentFixture<MyComp4115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
