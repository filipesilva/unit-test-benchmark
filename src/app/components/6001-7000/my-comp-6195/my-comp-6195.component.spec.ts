import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6195Component } from './my-comp-6195.component';

describe('MyComp6195Component', () => {
  let component: MyComp6195Component;
  let fixture: ComponentFixture<MyComp6195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
