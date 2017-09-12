import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7699Component } from './my-comp-7699.component';

describe('MyComp7699Component', () => {
  let component: MyComp7699Component;
  let fixture: ComponentFixture<MyComp7699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
