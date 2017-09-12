import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6258Component } from './my-comp-6258.component';

describe('MyComp6258Component', () => {
  let component: MyComp6258Component;
  let fixture: ComponentFixture<MyComp6258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
