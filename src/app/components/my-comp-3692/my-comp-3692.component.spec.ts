import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3692Component } from './my-comp-3692.component';

describe('MyComp3692Component', () => {
  let component: MyComp3692Component;
  let fixture: ComponentFixture<MyComp3692Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3692Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3692Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
