import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6937Component } from './my-comp-6937.component';

describe('MyComp6937Component', () => {
  let component: MyComp6937Component;
  let fixture: ComponentFixture<MyComp6937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
