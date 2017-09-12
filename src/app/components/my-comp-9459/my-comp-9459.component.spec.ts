import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9459Component } from './my-comp-9459.component';

describe('MyComp9459Component', () => {
  let component: MyComp9459Component;
  let fixture: ComponentFixture<MyComp9459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
