import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6817Component } from './my-comp-6817.component';

describe('MyComp6817Component', () => {
  let component: MyComp6817Component;
  let fixture: ComponentFixture<MyComp6817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
