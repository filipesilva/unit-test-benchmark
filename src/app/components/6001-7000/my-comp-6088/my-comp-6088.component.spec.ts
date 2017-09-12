import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6088Component } from './my-comp-6088.component';

describe('MyComp6088Component', () => {
  let component: MyComp6088Component;
  let fixture: ComponentFixture<MyComp6088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
