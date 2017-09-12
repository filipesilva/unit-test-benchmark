import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6347Component } from './my-comp-6347.component';

describe('MyComp6347Component', () => {
  let component: MyComp6347Component;
  let fixture: ComponentFixture<MyComp6347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
