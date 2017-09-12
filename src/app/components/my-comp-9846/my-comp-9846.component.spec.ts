import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9846Component } from './my-comp-9846.component';

describe('MyComp9846Component', () => {
  let component: MyComp9846Component;
  let fixture: ComponentFixture<MyComp9846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
