import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7235Component } from './my-comp-7235.component';

describe('MyComp7235Component', () => {
  let component: MyComp7235Component;
  let fixture: ComponentFixture<MyComp7235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
