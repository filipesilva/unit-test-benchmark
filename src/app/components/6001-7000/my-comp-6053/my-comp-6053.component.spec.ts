import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6053Component } from './my-comp-6053.component';

describe('MyComp6053Component', () => {
  let component: MyComp6053Component;
  let fixture: ComponentFixture<MyComp6053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
