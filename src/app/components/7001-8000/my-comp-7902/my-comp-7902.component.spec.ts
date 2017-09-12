import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7902Component } from './my-comp-7902.component';

describe('MyComp7902Component', () => {
  let component: MyComp7902Component;
  let fixture: ComponentFixture<MyComp7902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
