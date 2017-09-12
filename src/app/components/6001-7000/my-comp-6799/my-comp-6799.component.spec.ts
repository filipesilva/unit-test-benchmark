import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6799Component } from './my-comp-6799.component';

describe('MyComp6799Component', () => {
  let component: MyComp6799Component;
  let fixture: ComponentFixture<MyComp6799Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6799Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
