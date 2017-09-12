import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7896Component } from './my-comp-7896.component';

describe('MyComp7896Component', () => {
  let component: MyComp7896Component;
  let fixture: ComponentFixture<MyComp7896Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7896Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
