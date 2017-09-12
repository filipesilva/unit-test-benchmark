import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6961Component } from './my-comp-6961.component';

describe('MyComp6961Component', () => {
  let component: MyComp6961Component;
  let fixture: ComponentFixture<MyComp6961Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6961Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
