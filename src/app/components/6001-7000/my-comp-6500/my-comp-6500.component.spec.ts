import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6500Component } from './my-comp-6500.component';

describe('MyComp6500Component', () => {
  let component: MyComp6500Component;
  let fixture: ComponentFixture<MyComp6500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
