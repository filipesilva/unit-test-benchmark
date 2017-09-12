import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6479Component } from './my-comp-6479.component';

describe('MyComp6479Component', () => {
  let component: MyComp6479Component;
  let fixture: ComponentFixture<MyComp6479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
