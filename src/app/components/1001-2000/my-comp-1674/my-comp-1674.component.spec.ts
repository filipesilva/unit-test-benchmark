import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1674Component } from './my-comp-1674.component';

describe('MyComp1674Component', () => {
  let component: MyComp1674Component;
  let fixture: ComponentFixture<MyComp1674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
