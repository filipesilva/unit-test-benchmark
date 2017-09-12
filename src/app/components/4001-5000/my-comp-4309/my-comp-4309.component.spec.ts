import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4309Component } from './my-comp-4309.component';

describe('MyComp4309Component', () => {
  let component: MyComp4309Component;
  let fixture: ComponentFixture<MyComp4309Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4309Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
