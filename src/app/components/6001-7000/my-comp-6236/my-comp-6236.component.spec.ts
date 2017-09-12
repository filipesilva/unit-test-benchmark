import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6236Component } from './my-comp-6236.component';

describe('MyComp6236Component', () => {
  let component: MyComp6236Component;
  let fixture: ComponentFixture<MyComp6236Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6236Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
