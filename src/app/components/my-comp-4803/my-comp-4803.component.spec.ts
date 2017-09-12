import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4803Component } from './my-comp-4803.component';

describe('MyComp4803Component', () => {
  let component: MyComp4803Component;
  let fixture: ComponentFixture<MyComp4803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
