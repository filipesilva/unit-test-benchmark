import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1253Component } from './my-comp-1253.component';

describe('MyComp1253Component', () => {
  let component: MyComp1253Component;
  let fixture: ComponentFixture<MyComp1253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
