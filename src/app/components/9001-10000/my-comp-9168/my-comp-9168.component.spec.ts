import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9168Component } from './my-comp-9168.component';

describe('MyComp9168Component', () => {
  let component: MyComp9168Component;
  let fixture: ComponentFixture<MyComp9168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
