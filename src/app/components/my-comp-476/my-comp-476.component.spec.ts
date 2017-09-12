import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp476Component } from './my-comp-476.component';

describe('MyComp476Component', () => {
  let component: MyComp476Component;
  let fixture: ComponentFixture<MyComp476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
