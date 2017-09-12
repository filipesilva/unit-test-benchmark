import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9734Component } from './my-comp-9734.component';

describe('MyComp9734Component', () => {
  let component: MyComp9734Component;
  let fixture: ComponentFixture<MyComp9734Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9734Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9734Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
