import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6202Component } from './my-comp-6202.component';

describe('MyComp6202Component', () => {
  let component: MyComp6202Component;
  let fixture: ComponentFixture<MyComp6202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
