import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6211Component } from './my-comp-6211.component';

describe('MyComp6211Component', () => {
  let component: MyComp6211Component;
  let fixture: ComponentFixture<MyComp6211Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6211Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
