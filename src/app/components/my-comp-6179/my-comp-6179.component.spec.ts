import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6179Component } from './my-comp-6179.component';

describe('MyComp6179Component', () => {
  let component: MyComp6179Component;
  let fixture: ComponentFixture<MyComp6179Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6179Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
