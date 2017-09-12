import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7473Component } from './my-comp-7473.component';

describe('MyComp7473Component', () => {
  let component: MyComp7473Component;
  let fixture: ComponentFixture<MyComp7473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
