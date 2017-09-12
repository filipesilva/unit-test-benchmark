import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7346Component } from './my-comp-7346.component';

describe('MyComp7346Component', () => {
  let component: MyComp7346Component;
  let fixture: ComponentFixture<MyComp7346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
