import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9357Component } from './my-comp-9357.component';

describe('MyComp9357Component', () => {
  let component: MyComp9357Component;
  let fixture: ComponentFixture<MyComp9357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
