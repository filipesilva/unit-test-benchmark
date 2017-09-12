import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4988Component } from './my-comp-4988.component';

describe('MyComp4988Component', () => {
  let component: MyComp4988Component;
  let fixture: ComponentFixture<MyComp4988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
