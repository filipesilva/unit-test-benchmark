import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6097Component } from './my-comp-6097.component';

describe('MyComp6097Component', () => {
  let component: MyComp6097Component;
  let fixture: ComponentFixture<MyComp6097Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6097Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6097Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
