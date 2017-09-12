import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5639Component } from './my-comp-5639.component';

describe('MyComp5639Component', () => {
  let component: MyComp5639Component;
  let fixture: ComponentFixture<MyComp5639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
