import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1958Component } from './my-comp-1958.component';

describe('MyComp1958Component', () => {
  let component: MyComp1958Component;
  let fixture: ComponentFixture<MyComp1958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
