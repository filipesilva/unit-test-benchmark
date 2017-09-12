import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4356Component } from './my-comp-4356.component';

describe('MyComp4356Component', () => {
  let component: MyComp4356Component;
  let fixture: ComponentFixture<MyComp4356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
