import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6499Component } from './my-comp-6499.component';

describe('MyComp6499Component', () => {
  let component: MyComp6499Component;
  let fixture: ComponentFixture<MyComp6499Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6499Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6499Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
