import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6914Component } from './my-comp-6914.component';

describe('MyComp6914Component', () => {
  let component: MyComp6914Component;
  let fixture: ComponentFixture<MyComp6914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
