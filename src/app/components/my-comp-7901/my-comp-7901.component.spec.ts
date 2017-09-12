import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7901Component } from './my-comp-7901.component';

describe('MyComp7901Component', () => {
  let component: MyComp7901Component;
  let fixture: ComponentFixture<MyComp7901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
