import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6876Component } from './my-comp-6876.component';

describe('MyComp6876Component', () => {
  let component: MyComp6876Component;
  let fixture: ComponentFixture<MyComp6876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
