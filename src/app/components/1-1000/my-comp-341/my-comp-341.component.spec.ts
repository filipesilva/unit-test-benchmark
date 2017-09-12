import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp341Component } from './my-comp-341.component';

describe('MyComp341Component', () => {
  let component: MyComp341Component;
  let fixture: ComponentFixture<MyComp341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
