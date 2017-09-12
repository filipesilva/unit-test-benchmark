import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6219Component } from './my-comp-6219.component';

describe('MyComp6219Component', () => {
  let component: MyComp6219Component;
  let fixture: ComponentFixture<MyComp6219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
