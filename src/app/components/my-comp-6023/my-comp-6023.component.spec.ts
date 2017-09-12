import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6023Component } from './my-comp-6023.component';

describe('MyComp6023Component', () => {
  let component: MyComp6023Component;
  let fixture: ComponentFixture<MyComp6023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
