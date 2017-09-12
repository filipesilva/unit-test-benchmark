import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1163Component } from './my-comp-1163.component';

describe('MyComp1163Component', () => {
  let component: MyComp1163Component;
  let fixture: ComponentFixture<MyComp1163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
