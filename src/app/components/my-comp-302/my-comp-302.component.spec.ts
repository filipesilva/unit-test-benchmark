import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp302Component } from './my-comp-302.component';

describe('MyComp302Component', () => {
  let component: MyComp302Component;
  let fixture: ComponentFixture<MyComp302Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp302Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
