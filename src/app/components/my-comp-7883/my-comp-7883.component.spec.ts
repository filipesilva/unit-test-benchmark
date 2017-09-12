import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7883Component } from './my-comp-7883.component';

describe('MyComp7883Component', () => {
  let component: MyComp7883Component;
  let fixture: ComponentFixture<MyComp7883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
