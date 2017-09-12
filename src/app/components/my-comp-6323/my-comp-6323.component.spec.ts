import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6323Component } from './my-comp-6323.component';

describe('MyComp6323Component', () => {
  let component: MyComp6323Component;
  let fixture: ComponentFixture<MyComp6323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
