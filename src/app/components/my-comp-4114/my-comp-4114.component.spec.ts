import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4114Component } from './my-comp-4114.component';

describe('MyComp4114Component', () => {
  let component: MyComp4114Component;
  let fixture: ComponentFixture<MyComp4114Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4114Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
