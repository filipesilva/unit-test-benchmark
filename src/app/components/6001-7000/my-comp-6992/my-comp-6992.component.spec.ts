import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6992Component } from './my-comp-6992.component';

describe('MyComp6992Component', () => {
  let component: MyComp6992Component;
  let fixture: ComponentFixture<MyComp6992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
