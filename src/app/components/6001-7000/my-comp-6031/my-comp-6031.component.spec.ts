import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6031Component } from './my-comp-6031.component';

describe('MyComp6031Component', () => {
  let component: MyComp6031Component;
  let fixture: ComponentFixture<MyComp6031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
