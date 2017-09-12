import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6393Component } from './my-comp-6393.component';

describe('MyComp6393Component', () => {
  let component: MyComp6393Component;
  let fixture: ComponentFixture<MyComp6393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
