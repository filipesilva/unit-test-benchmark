import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6571Component } from './my-comp-6571.component';

describe('MyComp6571Component', () => {
  let component: MyComp6571Component;
  let fixture: ComponentFixture<MyComp6571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
