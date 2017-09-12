import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9542Component } from './my-comp-9542.component';

describe('MyComp9542Component', () => {
  let component: MyComp9542Component;
  let fixture: ComponentFixture<MyComp9542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
