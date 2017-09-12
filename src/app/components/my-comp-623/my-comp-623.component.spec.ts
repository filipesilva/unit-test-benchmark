import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp623Component } from './my-comp-623.component';

describe('MyComp623Component', () => {
  let component: MyComp623Component;
  let fixture: ComponentFixture<MyComp623Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp623Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp623Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
