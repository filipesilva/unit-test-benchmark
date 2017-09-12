import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7783Component } from './my-comp-7783.component';

describe('MyComp7783Component', () => {
  let component: MyComp7783Component;
  let fixture: ComponentFixture<MyComp7783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
