import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6602Component } from './my-comp-6602.component';

describe('MyComp6602Component', () => {
  let component: MyComp6602Component;
  let fixture: ComponentFixture<MyComp6602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
