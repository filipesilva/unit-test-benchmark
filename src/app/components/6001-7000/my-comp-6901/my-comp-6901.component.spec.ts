import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6901Component } from './my-comp-6901.component';

describe('MyComp6901Component', () => {
  let component: MyComp6901Component;
  let fixture: ComponentFixture<MyComp6901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
