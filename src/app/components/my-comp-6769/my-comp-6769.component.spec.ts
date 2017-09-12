import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6769Component } from './my-comp-6769.component';

describe('MyComp6769Component', () => {
  let component: MyComp6769Component;
  let fixture: ComponentFixture<MyComp6769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
