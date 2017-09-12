import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6452Component } from './my-comp-6452.component';

describe('MyComp6452Component', () => {
  let component: MyComp6452Component;
  let fixture: ComponentFixture<MyComp6452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
