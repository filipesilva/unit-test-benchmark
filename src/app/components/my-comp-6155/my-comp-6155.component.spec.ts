import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6155Component } from './my-comp-6155.component';

describe('MyComp6155Component', () => {
  let component: MyComp6155Component;
  let fixture: ComponentFixture<MyComp6155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
