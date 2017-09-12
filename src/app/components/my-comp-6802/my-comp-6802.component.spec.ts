import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6802Component } from './my-comp-6802.component';

describe('MyComp6802Component', () => {
  let component: MyComp6802Component;
  let fixture: ComponentFixture<MyComp6802Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6802Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
