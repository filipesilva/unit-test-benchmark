import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1605Component } from './my-comp-1605.component';

describe('MyComp1605Component', () => {
  let component: MyComp1605Component;
  let fixture: ComponentFixture<MyComp1605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
