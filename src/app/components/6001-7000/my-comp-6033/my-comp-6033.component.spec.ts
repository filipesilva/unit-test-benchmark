import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6033Component } from './my-comp-6033.component';

describe('MyComp6033Component', () => {
  let component: MyComp6033Component;
  let fixture: ComponentFixture<MyComp6033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
