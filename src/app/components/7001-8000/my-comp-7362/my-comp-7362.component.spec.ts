import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7362Component } from './my-comp-7362.component';

describe('MyComp7362Component', () => {
  let component: MyComp7362Component;
  let fixture: ComponentFixture<MyComp7362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
