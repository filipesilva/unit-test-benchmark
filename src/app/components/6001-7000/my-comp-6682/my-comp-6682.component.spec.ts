import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6682Component } from './my-comp-6682.component';

describe('MyComp6682Component', () => {
  let component: MyComp6682Component;
  let fixture: ComponentFixture<MyComp6682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
