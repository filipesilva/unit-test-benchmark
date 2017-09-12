import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5060Component } from './my-comp-5060.component';

describe('MyComp5060Component', () => {
  let component: MyComp5060Component;
  let fixture: ComponentFixture<MyComp5060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
