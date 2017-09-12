import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6216Component } from './my-comp-6216.component';

describe('MyComp6216Component', () => {
  let component: MyComp6216Component;
  let fixture: ComponentFixture<MyComp6216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
