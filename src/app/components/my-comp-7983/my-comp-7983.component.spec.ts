import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7983Component } from './my-comp-7983.component';

describe('MyComp7983Component', () => {
  let component: MyComp7983Component;
  let fixture: ComponentFixture<MyComp7983Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7983Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7983Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
