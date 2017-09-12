import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7283Component } from './my-comp-7283.component';

describe('MyComp7283Component', () => {
  let component: MyComp7283Component;
  let fixture: ComponentFixture<MyComp7283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
