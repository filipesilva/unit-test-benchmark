import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9390Component } from './my-comp-9390.component';

describe('MyComp9390Component', () => {
  let component: MyComp9390Component;
  let fixture: ComponentFixture<MyComp9390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
