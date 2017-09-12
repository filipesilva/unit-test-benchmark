import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6924Component } from './my-comp-6924.component';

describe('MyComp6924Component', () => {
  let component: MyComp6924Component;
  let fixture: ComponentFixture<MyComp6924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
