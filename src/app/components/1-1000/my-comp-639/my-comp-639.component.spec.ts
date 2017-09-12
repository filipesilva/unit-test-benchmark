import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp639Component } from './my-comp-639.component';

describe('MyComp639Component', () => {
  let component: MyComp639Component;
  let fixture: ComponentFixture<MyComp639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
