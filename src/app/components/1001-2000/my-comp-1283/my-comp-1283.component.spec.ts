import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1283Component } from './my-comp-1283.component';

describe('MyComp1283Component', () => {
  let component: MyComp1283Component;
  let fixture: ComponentFixture<MyComp1283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
