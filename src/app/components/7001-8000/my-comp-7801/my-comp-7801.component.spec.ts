import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7801Component } from './my-comp-7801.component';

describe('MyComp7801Component', () => {
  let component: MyComp7801Component;
  let fixture: ComponentFixture<MyComp7801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
