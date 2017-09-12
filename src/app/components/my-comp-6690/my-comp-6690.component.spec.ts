import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6690Component } from './my-comp-6690.component';

describe('MyComp6690Component', () => {
  let component: MyComp6690Component;
  let fixture: ComponentFixture<MyComp6690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
