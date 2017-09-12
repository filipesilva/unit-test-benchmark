import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1660Component } from './my-comp-1660.component';

describe('MyComp1660Component', () => {
  let component: MyComp1660Component;
  let fixture: ComponentFixture<MyComp1660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
