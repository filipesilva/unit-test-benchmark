import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp357Component } from './my-comp-357.component';

describe('MyComp357Component', () => {
  let component: MyComp357Component;
  let fixture: ComponentFixture<MyComp357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
