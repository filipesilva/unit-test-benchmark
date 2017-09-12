import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7663Component } from './my-comp-7663.component';

describe('MyComp7663Component', () => {
  let component: MyComp7663Component;
  let fixture: ComponentFixture<MyComp7663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
