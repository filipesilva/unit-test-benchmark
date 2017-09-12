import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9491Component } from './my-comp-9491.component';

describe('MyComp9491Component', () => {
  let component: MyComp9491Component;
  let fixture: ComponentFixture<MyComp9491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
