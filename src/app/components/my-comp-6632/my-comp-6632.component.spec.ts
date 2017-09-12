import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6632Component } from './my-comp-6632.component';

describe('MyComp6632Component', () => {
  let component: MyComp6632Component;
  let fixture: ComponentFixture<MyComp6632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
