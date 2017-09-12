import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1907Component } from './my-comp-1907.component';

describe('MyComp1907Component', () => {
  let component: MyComp1907Component;
  let fixture: ComponentFixture<MyComp1907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
