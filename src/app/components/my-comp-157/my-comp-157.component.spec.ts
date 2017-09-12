import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp157Component } from './my-comp-157.component';

describe('MyComp157Component', () => {
  let component: MyComp157Component;
  let fixture: ComponentFixture<MyComp157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
