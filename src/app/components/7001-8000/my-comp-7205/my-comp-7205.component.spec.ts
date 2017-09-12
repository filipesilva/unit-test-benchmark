import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7205Component } from './my-comp-7205.component';

describe('MyComp7205Component', () => {
  let component: MyComp7205Component;
  let fixture: ComponentFixture<MyComp7205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
