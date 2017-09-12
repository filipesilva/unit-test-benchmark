import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6411Component } from './my-comp-6411.component';

describe('MyComp6411Component', () => {
  let component: MyComp6411Component;
  let fixture: ComponentFixture<MyComp6411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
