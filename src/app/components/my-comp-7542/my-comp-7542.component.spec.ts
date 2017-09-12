import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7542Component } from './my-comp-7542.component';

describe('MyComp7542Component', () => {
  let component: MyComp7542Component;
  let fixture: ComponentFixture<MyComp7542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
