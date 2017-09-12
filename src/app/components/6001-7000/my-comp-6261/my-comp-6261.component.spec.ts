import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6261Component } from './my-comp-6261.component';

describe('MyComp6261Component', () => {
  let component: MyComp6261Component;
  let fixture: ComponentFixture<MyComp6261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
