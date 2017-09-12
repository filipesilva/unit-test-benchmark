import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7739Component } from './my-comp-7739.component';

describe('MyComp7739Component', () => {
  let component: MyComp7739Component;
  let fixture: ComponentFixture<MyComp7739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
