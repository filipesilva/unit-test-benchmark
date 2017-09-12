import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7168Component } from './my-comp-7168.component';

describe('MyComp7168Component', () => {
  let component: MyComp7168Component;
  let fixture: ComponentFixture<MyComp7168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
