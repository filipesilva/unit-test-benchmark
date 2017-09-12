import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5452Component } from './my-comp-5452.component';

describe('MyComp5452Component', () => {
  let component: MyComp5452Component;
  let fixture: ComponentFixture<MyComp5452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
