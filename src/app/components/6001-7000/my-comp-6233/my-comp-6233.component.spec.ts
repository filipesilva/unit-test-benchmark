import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6233Component } from './my-comp-6233.component';

describe('MyComp6233Component', () => {
  let component: MyComp6233Component;
  let fixture: ComponentFixture<MyComp6233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
