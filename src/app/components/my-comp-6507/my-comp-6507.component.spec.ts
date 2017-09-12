import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6507Component } from './my-comp-6507.component';

describe('MyComp6507Component', () => {
  let component: MyComp6507Component;
  let fixture: ComponentFixture<MyComp6507Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6507Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
