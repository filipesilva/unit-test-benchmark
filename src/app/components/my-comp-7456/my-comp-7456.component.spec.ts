import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7456Component } from './my-comp-7456.component';

describe('MyComp7456Component', () => {
  let component: MyComp7456Component;
  let fixture: ComponentFixture<MyComp7456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
