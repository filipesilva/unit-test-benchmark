import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1059Component } from './my-comp-1059.component';

describe('MyComp1059Component', () => {
  let component: MyComp1059Component;
  let fixture: ComponentFixture<MyComp1059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
