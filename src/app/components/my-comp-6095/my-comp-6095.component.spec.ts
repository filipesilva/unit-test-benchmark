import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6095Component } from './my-comp-6095.component';

describe('MyComp6095Component', () => {
  let component: MyComp6095Component;
  let fixture: ComponentFixture<MyComp6095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
