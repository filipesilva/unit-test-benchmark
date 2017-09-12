import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6998Component } from './my-comp-6998.component';

describe('MyComp6998Component', () => {
  let component: MyComp6998Component;
  let fixture: ComponentFixture<MyComp6998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
