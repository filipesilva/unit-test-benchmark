import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9283Component } from './my-comp-9283.component';

describe('MyComp9283Component', () => {
  let component: MyComp9283Component;
  let fixture: ComponentFixture<MyComp9283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
