import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6583Component } from './my-comp-6583.component';

describe('MyComp6583Component', () => {
  let component: MyComp6583Component;
  let fixture: ComponentFixture<MyComp6583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
