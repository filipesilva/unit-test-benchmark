import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7139Component } from './my-comp-7139.component';

describe('MyComp7139Component', () => {
  let component: MyComp7139Component;
  let fixture: ComponentFixture<MyComp7139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
