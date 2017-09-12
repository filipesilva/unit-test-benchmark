import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7343Component } from './my-comp-7343.component';

describe('MyComp7343Component', () => {
  let component: MyComp7343Component;
  let fixture: ComponentFixture<MyComp7343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
