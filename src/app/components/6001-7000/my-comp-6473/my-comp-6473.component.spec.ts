import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6473Component } from './my-comp-6473.component';

describe('MyComp6473Component', () => {
  let component: MyComp6473Component;
  let fixture: ComponentFixture<MyComp6473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
