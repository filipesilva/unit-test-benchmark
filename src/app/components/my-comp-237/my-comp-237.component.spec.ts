import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp237Component } from './my-comp-237.component';

describe('MyComp237Component', () => {
  let component: MyComp237Component;
  let fixture: ComponentFixture<MyComp237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
