import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6418Component } from './my-comp-6418.component';

describe('MyComp6418Component', () => {
  let component: MyComp6418Component;
  let fixture: ComponentFixture<MyComp6418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
