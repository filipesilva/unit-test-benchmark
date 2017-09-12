import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7119Component } from './my-comp-7119.component';

describe('MyComp7119Component', () => {
  let component: MyComp7119Component;
  let fixture: ComponentFixture<MyComp7119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
