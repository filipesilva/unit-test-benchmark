import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp426Component } from './my-comp-426.component';

describe('MyComp426Component', () => {
  let component: MyComp426Component;
  let fixture: ComponentFixture<MyComp426Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp426Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
