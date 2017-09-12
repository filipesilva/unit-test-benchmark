import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7600Component } from './my-comp-7600.component';

describe('MyComp7600Component', () => {
  let component: MyComp7600Component;
  let fixture: ComponentFixture<MyComp7600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
