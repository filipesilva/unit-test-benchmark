import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5356Component } from './my-comp-5356.component';

describe('MyComp5356Component', () => {
  let component: MyComp5356Component;
  let fixture: ComponentFixture<MyComp5356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
