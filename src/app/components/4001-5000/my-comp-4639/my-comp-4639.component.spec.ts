import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4639Component } from './my-comp-4639.component';

describe('MyComp4639Component', () => {
  let component: MyComp4639Component;
  let fixture: ComponentFixture<MyComp4639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
