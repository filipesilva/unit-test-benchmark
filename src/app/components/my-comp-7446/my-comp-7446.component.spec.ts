import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7446Component } from './my-comp-7446.component';

describe('MyComp7446Component', () => {
  let component: MyComp7446Component;
  let fixture: ComponentFixture<MyComp7446Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7446Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
